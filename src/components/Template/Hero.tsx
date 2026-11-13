import Link from 'next/link';
import profile from '@/data/profile.json';
import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <p className="hero-kicker">
            Independent consulting · Strategy &amp; performance advisory
          </p>
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>
          <p className="hero-tagline">
            Clearer strategy. Measurable performance.{' '}
            <span className="hero-highlight">Evidence to move forward.</span>
          </p>
          <p className="hero-summary">
            I help founders, leadership teams, and boards connect growth
            metrics, KPI reporting, corporate and fundraising strategy, and
            investment and impact analysis to practical decisions.
          </p>
          <p className="hero-summary">
            Senior Associate at{' '}
            <a href="https://annaincubator.org/">Anna Incubator</a> since
            October 2026. Background in agriculture, business analysis, and
            startup ecosystems.
          </p>
          <div className="hero-cta">
            <Link href="/contact/" className="button">
              Discuss your project
            </Link>
            <Link href="/services/" className="hero-resume-link">
              Explore services →
            </Link>
          </div>
        </div>
        <figure className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
          <figcaption>Strategy informed by data.</figcaption>
        </figure>
      </div>
    </section>
  );
}
