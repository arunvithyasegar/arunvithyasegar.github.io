import Link from 'next/link';
import LiveAge from '@/components/Stats/LiveAge';
import profile from '@/data/profile.json';
import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section id="intro" className="p-hero" aria-labelledby="home-headline">
      <div className="p-hero-grid" aria-hidden="true" />
      <div>
        <p className="p-overline p-entrance">
          <span className="p-dot" />
          {profile.name}
        </p>
        <h1 id="home-headline" className="p-entrance p-delay-one">
          Turning strategy and data into <em>practical decisions.</em>
        </h1>
        <p className="p-intro p-entrance p-delay-two">
          I work across startup strategy, growth metrics, investor readiness,
          and data-driven decision-making.
        </p>
        <div className="p-actions p-entrance p-delay-three">
          <Link className="p-button p-primary" href="/contact/">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
          <Link className="p-button" href="/projects/">
            Explore my work <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <p className="p-hero-note p-entrance p-delay-three">
          Currently exploring ·{' '}
          <Link href="/writing/a-board-ready-arr-and-kpi-dashboard/">
            What makes an ARR dashboard board-ready? →
          </Link>
        </p>
      </div>
      <figure className="p-portrait p-entrance p-delay-two">
        <ThemePortrait width={400} height={480} priority />
        <p className="p-portrait-role">
          {profile.role} · {profile.employer}
        </p>
        <figcaption>
          <LiveAge compact />
        </figcaption>
      </figure>
    </section>
  );
}
