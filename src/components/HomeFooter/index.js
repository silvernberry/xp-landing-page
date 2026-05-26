import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

const logoMark  = require('@site/static/img/xp_logo.png').default;
const auguthImg = require('@site/static/img/parent_logo.png').default;

const links = [
  { label: 'Docs',   to: '/docs/intro', internal: true },
  { label: 'Crates', href: 'https://crates.io/crates/pallet-xp' },
  { label: 'Source', href: 'https://docs.rs/pallet-xp/0.1.1/src/pallet_xp/lib.rs.html#16-2537' },
];

const social = [
  { label: 'Github',   href: 'https://github.com/auguth/frame-suite' },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/auguth-labs/' },
  { label: 'Email',    href: 'mailto:auguthlabs@gmail.com' },
];

const AuguthBlock = () => (
  <div className={styles.auguthBlock}>
    <div className={styles.auguthImgBox}>
      <img src={auguthImg} alt="Auguth Labs" className={styles.auguthImg} />
    </div>
    {/* <p className={styles.auguthSub}>Auguth Labs (OPC) Pvt Ltd, India</p> */}
  </div>
);

const LinksBlock = () => (
  <div className={styles.linksBlock}>
    <div className={styles.col}>
      <p className={styles.colHeading}>Links</p>
      {links.map((l) =>
        l.internal ? (
          <Link
            key={l.label}
            to={l.to}
            className={styles.colLink}
          >
            {l.label}
          </Link>
        ) : (
          <a
            key={l.label}
            href={l.href}
            className={styles.colLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            {l.label}
          </a>
        )
      )}
    </div>
    <div className={styles.col}>
      <p className={styles.colHeading}>Social</p>
      {social.map((s) => (
        <a key={s.label} href={s.href} className={styles.colLink}
          target="_blank" rel="noopener noreferrer">{s.label}</a>
      ))}
    </div>
  </div>
);

export default function HomeFooter() {
  return (
    <footer className={styles.footer}>
      <div className={styles.box}>

        <div className={styles.desktopRow}>

          <div className={styles.leftBlock}>
            <div className={styles.pxpBlock}>
              <div className={styles.brandRow}>
                <div className={styles.logoMark}>
                  <img src={logoMark} alt="Pallet-XP" className={styles.logoMarkImg} />
                </div>
                <span className={styles.brandName}>Pallet-XP</span>
              </div>
              <p className={styles.tagline}>
                A reputation primitive for Web3.<br />
                Non-monetary. Non-transferable.<br />
                Fully on-chain. Fully yours.
              </p>
            </div>
            <div className={styles.innerVsep} />
            <LinksBlock />
          </div>

          <div className={styles.outerVsep} />

          <div className={styles.desktopAuguth}>
            <AuguthBlock />
          </div>
        </div>

        <div className={styles.tabletLayout}>
          <div className={styles.tabletTop}>
            <div className={styles.brandRow}>
              <div className={styles.logoMark}>
                <img src={logoMark} alt="Pallet-XP" className={styles.logoMarkImg} />
              </div>
              <span className={styles.brandName}>Pallet-XP</span>
            </div>
            <p className={styles.tagline}>
              A reputation primitive for Web3. Non-monetary. Non-transferable. Fully on-chain.
            </p>
          </div>
          <div className={styles.hdivider} />
          <div className={styles.tabletBottom}>
            <AuguthBlock />
            <div className={styles.outerVsep} />
            <LinksBlock />
          </div>
        </div>

        <div className={styles.mobileLayout}>
          <div className={styles.brandRow}>
            <div className={styles.logoMark}>
              <img src={logoMark} alt="Pallet-XP" className={styles.logoMarkImg} />
            </div>
            <span className={styles.brandName}>Pallet-XP</span>
          </div>
          <p className={styles.tagline}>
            A reputation primitive for Web3. Non-monetary. Non-transferable. Fully on-chain.
          </p>
          <div className={styles.hdivider} />
          <LinksBlock />
          <div className={styles.hdivider} />
          <AuguthBlock />
        </div>

        <div className={styles.bottom}>
          <p className={styles.copy}>2026 pallet-xp. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
}