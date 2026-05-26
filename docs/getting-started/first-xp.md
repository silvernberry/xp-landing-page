---
toc_min_heading_level: 2
toc_max_heading_level: 2
---


# 🌱 First XP Identity

After configuring `pallet-xp`, the next step is creating your first XP identity.

An XP identity is created around:

```text
Owner (AccountId) -> owns -> XpId -> holds XP state
```

This is the beginning of the full XP lifecycle.

### Two Ways to Create XP

There are two main ways to initialize XP:

| Method                               | Safety      | Recommended                  |
| ------------------------------------ | ----------- | ---------------------------- |
| `BeginXp::begin_xp()`                | safest      | ✅ Yes                        |
| `XpMutate::create_xp()` / `new_xp()` | lower-level | ⚠️ Internal / controlled use |

The difference is important.

---

## 1. Safe Creation - `BeginXp`

### Recommended Method

```rust
BeginXp::begin_xp(owner)
```

This is the safest and preferred way to create a new XP identity via `BeginXp` trait.

It performs:

* XP key generation
* ownership setup
* initial XP initialization
* reaped-key protection
* lifecycle-safe creation

Most importantly:

> it checks whether the XP key was already reaped

and prevents reinitialization forever. This protects lifecycle finality.

If an XP was deleted through reaping, it can never be initialized again.

This is enforced by checking `ReapedXp`. That is why `BeginXp` is the production-safe path 🚀

---

## 2. Manual Creation - `XpMutate`

### Lower-Level Methods

You can also create XP manually using the lower-level `XpMutate` mutation trait:

```rust
XpMutate::create_xp(owner, key)
```

or

```rust
XpMutate::new_xp(owner, key)
```

Unlike `BeginXp::begin_xp()`:

These methods require you to manage the XP key yourself.

That means:

```text
you choose the XpId manually 
-> then create the XP entry for it
```

This gives more control, but also more responsibility.

They are mainly used for:

* internal runtime logic
* controlled pallet integrations
* migrations
* advanced custom flows

If you fully control the lifecycle and can guarantee safe initialization:

> you may use `create_xp()` or `new_xp()`

but for normal user-facing XP creation:

> always prefer `BeginXp::begin_xp()`

because it provides stronger lifecycle safety.

## XP Earning Models

Once XP exists, the preferred method for earning xp-points is via the `XpMutate` trait:

```rust
XpMutate::earn_xp(key, points)
```

not:

```rust
XpMutate::set_xp(key, points)
```

---

## 1. Earn with Reputation Growth

```rust
earn_xp()
```

is the correct method for normal XP progression.

Why?

Because it applies:

* pulse progression
* reward scaling
* reputation thresholds
* anti-abuse rules
* lifecycle hooks

This preserves the meaning of XP as earned reputation.

This should be your default path 📈

---

## 2. Direct Points Update

```rust
set_xp()
```

directly modifies XP.

It bypasses:

* reputation logic
* earning rules
* trust thresholds

This should only be used for:

* migrations
* admin correction
* genesis operations
* internal runtime resets

Never expose this to users.

The trait itself warns:

> Use with caution

Think of it as:

```text
earn_xp() = reputation-safe

set_xp() = low-level override
```

---

## Inspecting XP State

After creation, you can inspect XP using read traits like:

* `XpSystem`: read XP values like total XP, usable XP, and current state
* `XpOwner`: inspect ownership mappings between `AccountId` and `XpId`
* `XpReserve`: inspect reserved XP and how much is currently held
* `XpLock`: inspect locked or frozen XP that cannot be used

Examples:

| Trait       | Example            | Description                              |
| ----------- | ------------------ | ---------------------------------------- |
| `XpSystem`  | `get_xp()`         | Read the current XP value of an identity |
| `XpOwner`   | `xp_of_owner()`    | Find which `XpId` belongs to an owner    |
| `XpReserve` | `total_reserved()` | Check how much XP is currently reserved  |
| `XpLock`    | `total_locked()`   | Check how much XP is currently locked    |

---

## Recommended Real Flow

The best practical flow is:

```mermaid
flowchart TD
    A["BeginXp::begin_xp()"] 
    B["earn_xp()"] 
    C["reserve / lock if needed"] 
    D["inspect via system traits"] 
    A --> B 
    B --> C 
    C --> D
```

because XP should behave like reputation,

not manual balances.

---



## XP Usage Surfaces

There are three common ways to use XP from your runtime or from another pallet.

The best choice depends on how tightly you want your code to depend on `pallet-xp`.

Some projects prefer direct access for simplicity, while others use trait adapters for cleaner architecture.

## 1. Direct Import (Tightly Coupled)

The simplest approach is to directly depend on `pallet-xp` and use:

```rust
use pallet_xp::Pallet;
```

Since `pallet_xp::Pallet<T>` implements all XP traits, you can call methods directly:

```rust
pallet_xp::Pallet<T>::earn_xp(...)
pallet_xp::Pallet<T>::get_xp(...)
pallet_xp::Pallet<T>::begin_xp(...)
```

where `T` implements `frame_system::Config`, which is typically included as a supertrait bound in your pallet's `Config` trait.

This is straightforward and explicit, but it tightly couples your pallet to `pallet-xp`.

Best for:

* internal pallets
* protocol-owned modules
* fast development
* simple integrations

---

## 2. Config Trait Adapter (Recommended)

A cleaner production pattern is to expose XP through your pallet's `Config` trait.

Example:

```rust
#[pallet::config]
pub trait Config: frame_system::Config {
    // Choose only the XP traits your pallet actually needs
    // and add them here as trait bounds.
    //
    // Examples:
    // XpSystem  -> read XP state
    // XpMutate  -> modify XP values
    // BeginXp   -> safely create new XP identities
    //
    // Add only what your logic requires.
    type Xp: XpSystem + XpMutate + BeginXp;
}
```

Then inside your pallet, use:

```rust
T::Xp::earn_xp(...)
```

instead of calling `pallet_xp::Pallet<T>` directly.

At the runtime level, connect it like this:

```rust
impl pallet_example::Config for Runtime {
    type Xp = pallet_xp::Pallet<Runtime>;
}
```

This keeps your pallet loosely coupled and best for

* reusable pallets
* framework-style pallets
* production systems
* long-term maintainability

This is usually the best design choice.

---

## 3. Direct Runtime Usage (Quick Prototyping)

If you are writing logic directly inside the runtime and want fast iteration, you can simply use:

```rust
pallet_xp::Pallet<Runtime>::earn_xp(...)
```
where `Runtime` is the type which implements all pallets `Config` traits.

Because `pallet_xp::Pallet<Runtime>` already implements all XP traits, no adapter is needed.

Best for:

* runtime experiments
* prototypes
* testing ideas quickly

This is fast and convenient, but less modular.

---

## Quick Reference

| Need                         | Best Method           | Why                                               |
| ---------------------------- | --------------------- | ------------------------------------------------- |
| first XP creation            | `BeginXp::begin_xp()` | safest lifecycle creation + reaped key protection |
| controlled internal creation | `create_xp()`         | creates XP with `init_xp` + hooks                 |
| raw primitive setup          | `new_xp()`            | lowest-level manual XP creation                   |
| normal XP progression        | `earn_xp()`           | applies pulse, reputation, and anti-abuse rules   |
| admin/system override        | `set_xp()`            | direct XP mutation without reputation logic       |
| fastest pallet integration   | direct import         | simplest and fastest setup                        |
| reusable pallet design       | config trait adapter  | clean architecture and loose coupling             |
| runtime-only prototype       | direct runtime usage  | fast experimentation inside runtime               |

For production systems:

> prefer `BeginXp::begin_xp()` + `earn_xp()`
> and use the config trait adapter pattern for pallet integrations

This keeps XP secure, meaningful, and lifecycle-safe.

---

## 🚀 Next Steps

Now that your first XP identity exists, the next step is learning how users interact with XP through pallet extrinsics.

👉 **Core -> [Extrinsics](../core/extrinsics.md)**
