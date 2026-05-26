import React, { useState, useEffect } from 'react';
import Link from '@docusaurus/Link';
import { useLocation } from '@docusaurus/router';
import styles from './styles.module.css';

export default HomeNavbar;

function HomeNavbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  const isDocs = pathname.includes('/docs');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`${styles.navbar} ${scrolled ? styles.scrolled : ''} ${isDocs ? styles.navbarDocs : ''}`}>
      <div className={styles.inner}>

        <Link to="/" className={styles.logo}>
          <span className={styles.logoText}>Pallet - <span className={styles.logoAccent}>XP</span></span>
        </Link>

        <ul className={styles.navLinks}>
          <li>
            <Link to="/docs/intro" className={styles.navLink}>Docs</Link>
          </li>
          <li>
            <a href="https://crates.io/crates/pallet-xp" className={styles.navLink}>Crates</a>
          </li>
          <li>
            <a href="https://docs.rs/pallet-xp/0.1.1/src/pallet_xp/lib.rs.html#16-2537" className={styles.navLink}>Source</a>
          </li>
          <li>
            <a href="https://github.com/auguth/frame-suite" className={styles.navLink}>Github</a>
          </li>
          <li>
            <a href="https://github.com/auguth/frame-suite" className={styles.navLink}>Template</a>
          </li>
        </ul>

        <Link to="/docs/getting-started/installation" className={styles.ctaButton}>
          Get Started
        </Link>

        <button
          className={styles.hamburger}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`${styles.bar} ${menuOpen ? styles.barTop : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barMid : ''}`} />
          <span className={`${styles.bar} ${menuOpen ? styles.barBot : ''}`} />
        </button>
      </div>

      <div className={`${styles.mobileMenu} ${menuOpen ? styles.mobileMenuOpen : ''}`}>
        <Link to="/docs/intro" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Docs</Link>
        <a href="https://crates.io/crates/pallet-xp" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Crates</a>
        <a href="https://docs.rs/pallet-xp/0.1.1/src/pallet_xp/lib.rs.html#16-2537" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Source</a>
        <a href="https://github.com/auguth/frame-suite" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Github</a>
        <a href="https://github.com/auguth/frame-suite" className={styles.mobileLink} onClick={() => setMenuOpen(false)}>Template</a>
        <Link to="/docs/getting-started/installation" className={styles.mobileCta} onClick={() => setMenuOpen(false)}>Get Started</Link>
      </div>
    </nav>
  );
}