import React from 'react';
import Link from '@docusaurus/Link';
import styles from './styles.module.css';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>

        <div className={styles.content}>

          <div className={styles.badge}>
            XP = Identity. XP = Reputation
          </div>

          <h1 className={styles.headline}>
            Experience Points,{' '}
            <span className={styles.headlineAccent}>the Substrate way.</span>
          </h1>

          <p className={styles.subtext}>
            A reputation primitive for Web3.{' '}
            Non-monetary.<br/>Non-transferable.{' '}
            Fully on-chain. Fully yours.
          </p>

          <div className={styles.actions}>
            <Link to="/docs/getting-started/installation" className={styles.btnPrimary}>
              Get Started <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
              stroke="currentColor" strokeWidth="2.5"
              strokeLinecap="round" strokeLinejoin="round">
              <line x1="5" y1="12" x2="19" y2="12" />
              <polyline points="13 6 19 12 13 18" />
            </svg>
            </Link>
            <Link to="/docs/intro" className={styles.btnSecondary}>
              <span className={styles.docIcon}>
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
                  <polyline points="14 2 14 8 20 8"/>
                  <line x1="16" y1="13" x2="8" y2="13"/>
                  <line x1="16" y1="17" x2="8" y2="17"/>
                  <polyline points="10 9 9 9 8 9"/>
                </svg>
              </span>
              Read Docs
            </Link>
          </div>
        </div>

        <div className={styles.imageWrapper}>
          {
            <img src={require('@site/static/img/herov2.png').default} alt="Pallet XP Hero" className={styles.heroImage} />
          }
        </div>

      </div>
    </section>
  );
}
