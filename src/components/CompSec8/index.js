import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
const mascotImg = require('@site/static/img/CompSec-8-1.png').default;

const leftFeatures = [
  { text: 'Modular pallet',         desc: "Plug in what you need. Skip what you don't.",    color: '#4ade80' },
  { text: 'Composable by design',   desc: 'Traits and hooks for any runtime.',               color: '#4ade80' },
  { text: 'No std assumptions',     desc: 'Works in no_std + WASM environments.',            color: '#4ade80' },
  { text: 'Well-documented',        desc: 'Inline docs, examples, and guides included.',     color: '#4ade80' },
  { text: 'Fully on-chain',         desc: 'No oracles. No bridges. Pure on-chain logic.',   color: '#4ade80' },
  { text: 'Battle tested patterns', desc: 'Proven in production environments.',              color: '#4ade80' },
];

const rightFeatures = [
  { text: 'Key-based identity',    desc: 'One XpId per account. Always on-chain.',          color: '#818cf8' },
  { text: 'Non-monetary design',   desc: 'No tokens. No inflation. Pure reputation.',        color: '#818cf8' },
  { text: 'Reputation-first',      desc: 'Every mechanic is built around earning XP.',       color: '#818cf8' },
  { text: 'Extensible via traits', desc: 'Hook into XP events from any pallet.',            color: '#818cf8' },
  { text: 'Upgrade-friendly',      desc: 'Safe storage migrations across versions.',         color: '#4ade80' },
  { text: 'Secure by default',     desc: 'Sybil-resistant by design. No off-chain trust assumptions.', color: '#f87171' },
];

const FeatureList = ({ features }) => (
  <ul className={styles.featureList}>
    {features.map((f, i) => (
      <li key={i} className={styles.feature}>
        <span className={styles.dot} style={{ background: f.color }} />
        <div className={styles.featureBody}>
          <span className={styles.featureText}>{f.text}</span>
          <span className={styles.featureDesc}>{f.desc}</span>
        </div>
      </li>
    ))}
  </ul>
);

const PolkadotLogo = () => (
  <svg className={styles.polkadotLogo} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <ellipse cx="16" cy="6.4" rx="4.267" ry="4.267" fill="#E6007A"/>
    <ellipse cx="16" cy="25.6" rx="4.267" ry="4.267" fill="#E6007A"/>
    <ellipse cx="26.988" cy="10.667" rx="4.267" ry="4.267" fill="#E6007A"/>
    <ellipse cx="5.012" cy="10.667" rx="4.267" ry="4.267" fill="#E6007A"/>
    <ellipse cx="26.988" cy="21.333" rx="4.267" ry="4.267" fill="#E6007A"/>
    <ellipse cx="5.012" cy="21.333" rx="4.267" ry="4.267" fill="#E6007A"/>
  </svg>
);

const CtaCardContent = () => (
  <>
    <div className={styles.ctaTop}>
      <span className={styles.ctaEyebrow}>Get started</span>
      <p className={styles.ctaHeadline}>
        Ready to build with <em className={styles.ctaEm}>Pallet-XP?</em>
      </p>
      <p className={styles.ctaDesc}>
        Official template - pre-configured runtime, example pallets, and full documentation included.
      </p>
    </div>
    <div className={styles.ctaHr} />
    <div className={styles.ctaBody}>
      <div className={styles.ctaSteps}>
        <div className={styles.ctaStep}><span className={styles.ctaNum}>01</span>Clone the template repository</div>
        <div className={styles.ctaStep}><span className={styles.ctaNum}>02</span>Lorem ipsum dolor sit amet, consectetur</div>
        <div className={styles.ctaStep}><span className={styles.ctaNum}>03</span>Lorem ipsum dolor sit amet, consectetur</div>
      </div>
      <div className={styles.ctaBtns}>
        <a href="https://github.com/auguth/frame-suite"
          className={styles.btnPrimary}
          target="_blank" rel="noopener noreferrer">
          Start with Template
        </a>
        <Link
          to="/docs/intro"
          className={styles.btnSecondary}>
          Read the docs
        </Link>
      </div>
    </div>
    <div className={styles.ctaHr} />
    <div className={styles.sdkBadges}>
      <a href="https://github.com/paritytech/polkadot-sdk" className={styles.sdkBadge} target="_blank" rel="noopener noreferrer">
        <PolkadotLogo />Powered by Polkadot SDK
      </a>
      <a href="https://docs.substrate.io" className={styles.subBadge} target="_blank" rel="noopener noreferrer">
        Built with Substrate & FRAME
      </a>
    </div>
  </>
);

const CtaCardDesktop = () => (
  <div className={styles.ctaCard}>
    <CtaCardContent />
  </div>
);

const CtaCardTablet = () => (
  <div className={styles.ctaCard}>
    <div className={styles.tabletCtaRow}>
      <div className={styles.tabletCtaContent}>
        <CtaCardContent />
      </div>
      <div className={styles.tabletCtaImage}>
        <img src={mascotImg} alt="Pallet XP mascot" className={styles.mascotImg} />
      </div>
    </div>
  </div>
);

export default function CompSec8() {
  return (
    <section className={styles.section}>
      <div className={styles.inner}>

        <div className={styles.titleRow}>
          <div className={styles.titleBlock}>
            <span className={styles.eyebrow}>For builders</span>
            <h2 className={styles.title}>
              Built for Developers.
              <span className={styles.titleAccent}> Loved by Builders.</span>
            </h2>
          </div>
        </div>

        <div className={styles.divider} />

        <div className={styles.grid}>
          <FeatureList features={leftFeatures} />
          <div className={styles.colRule} />
          <div className={styles.imageCol}>
            <CtaCardDesktop />
          </div>
          <div className={styles.colRule} />
          <FeatureList features={rightFeatures} />
        </div>

        <div className={styles.tabletBlock}>
          <div className={styles.titleBlock}>
            <span className={styles.eyebrow}>For builders</span>
            <h2 className={styles.title}>
              Built for Developers.<br />
              <span className={styles.titleAccent}>Loved by Builders.</span>
            </h2>
          </div>

          <div className={styles.divider} />

          <div className={styles.tabletGrid}>
            <FeatureList features={leftFeatures} />
            <div className={styles.colRule} />
            <FeatureList features={rightFeatures} />
          </div>

          <div className={styles.divider} />

          <CtaCardTablet />
        </div>

        <div className={styles.mobileBlock}>
          <div className={styles.titleBlock}>
            <span className={styles.eyebrow}>For builders</span>
            <h2 className={styles.title}>
              Built for Developers.<br />
              <span className={styles.titleAccent}>Loved by Builders.</span>
            </h2>
          </div>

          <div className={styles.divider} />

          <FeatureList features={leftFeatures} />

          <div className={styles.divider} />

          <div className={styles.ctaCard}>
            <CtaCardContent />
          </div>

          <div className={styles.divider} />

          <FeatureList features={rightFeatures} />
        </div>

      </div>
    </section>
  );
}