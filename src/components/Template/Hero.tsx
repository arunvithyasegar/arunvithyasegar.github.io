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
            Making complex questions{' '}
            <span className="hero-highlight">easier to act on.</span>
          </p>
          <p className="hero-summary">
            I’m Arun. I work across strategy, startup ecosystems, and data.
            Here’s a look at what I’ve built, how I think, and what I’m
            learning.
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
            <Link href="/contact/" className="hero-resume-link">
              Start a conversation →
            </Link>
          </div>
        </div>
        <figure className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
          <figcaption>A practical mind. A curious outlook.</figcaption>
        </figure>
      </div>
    </section>
  );
}
