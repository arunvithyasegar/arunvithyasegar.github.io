import Link from 'next/link';
import profile from '@/data/profile.json';
import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-grid">
        <div className="hero-primary">
          <p className="hero-kicker">Business &amp; data analysis</p>
          <h1 className="hero-title">
            <span className="hero-name">{profile.name}</span>
          </h1>
          <p className="hero-tagline">
            I connect{' '}
            <span className="hero-highlight">data, people, and processes</span>{' '}
            to build better systems.
          </p>
          <p className="hero-summary">
            From agricultural markets to digital healthcare, I turn complex data
            into practical business decisions with SQL, Python, and Power BI.
          </p>
          <div className="hero-cta">
            <Link href="/projects" className="button">
              Explore my work
            </Link>
            <Link href="/resume" className="hero-resume-link">
              View resume
            </Link>
          </div>
        </div>
        <figure className="hero-portrait">
          <ThemePortrait width={320} height={320} priority />
          <figcaption>{profile.currentCity}</figcaption>
        </figure>
      </div>
    </section>
  );
}
