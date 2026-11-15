import Link from 'next/link';
import { BOOKING_URL } from '@/data/conversion';
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
          Data and strategy for startups, health-insurance and agri-tech teams.
        </h1>
        <p className="p-intro p-entrance p-delay-two">
          KPI dashboards, board reporting, investor readiness.
        </p>
        <div className="p-actions p-entrance p-delay-three">
          <a className="p-button p-primary" href={BOOKING_URL || '/contact/'}>
            Book a 20-min call <span aria-hidden="true">→</span>
          </a>
          <Link className="p-button" href="/case-studies/">
            See case studies <span aria-hidden="true">↓</span>
          </Link>
        </div>
        <p className="p-hero-note p-entrance p-delay-three">
          Working framework ·{' '}
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
        <figcaption>Strategy, growth and analytics</figcaption>
      </figure>
    </section>
  );
}
