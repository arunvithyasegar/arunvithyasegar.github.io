import Link from 'next/link';
import profile from '@/data/profile.json';
import ThemePortrait from './ThemePortrait';
export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <p className="hero-kicker">Strategy, startups &amp; data</p>
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>
          <p className="hero-tagline">
            I connect{' '}
            <span className="hero-highlight">data, people, and ideas</span> to
            understand how things work—and how they can work better.
          </p>
          <p className="hero-summary">
            This is where I share my projects, writing, and the questions I’m
            exploring across growth, organisational performance, investment, and
            impact.
          </p>
          <p className="hero-summary">
            I’m a Senior Associate at{' '}
            <a href="https://annaincubator.org/">Anna Incubator</a>, with a
            background in agriculture, business analysis, and startup
            ecosystems.
          </p>
          <div className="hero-cta">
            <Link href="/projects/" className="button">
              Explore my work
            </Link>
            <Link href="/about/" className="hero-resume-link">
              A little about me →
            </Link>
          </div>
        </div>
        <figure className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
          <figcaption>
            Curious about the numbers—and the people behind them.
          </figcaption>
        </figure>
      </div>
    </section>
  );
}
