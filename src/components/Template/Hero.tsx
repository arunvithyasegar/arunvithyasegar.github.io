import Link from 'next/link';
import { RESUME_PDF_PATH } from '@/data/conversion';
import { professionalSummary } from '@/data/professional';
import profile from '@/data/profile.json';
import ThemePortrait from './ThemePortrait';

export default function Hero() {
  return (
    <section id="intro" className="p-hero" aria-labelledby="home-headline">
      <div className="p-hero-grid" aria-hidden="true" />
      <div>
        <p className="p-overline p-entrance">
          Business Analysis | Startup Ecosystems | Market Intelligence
        </p>
        <h1 id="home-headline" className="p-entrance p-delay-one">
          {profile.displayName}
        </h1>
        <p className="p-intro p-entrance p-delay-two">{professionalSummary}</p>
        <p className="p-hero-note">
          Currently serving as a {profile.role} at {profile.employer}, Chennai.
        </p>
        <div className="p-actions p-entrance p-delay-three">
          <Link className="p-button p-primary" href="/projects/">
            View My Work <span aria-hidden="true">→</span>
          </Link>
          <Link
            className="p-button"
            href={RESUME_PDF_PATH}
            download
            prefetch={false}
          >
            Download Resume
          </Link>
          <Link className="p-button" href="/contact/">
            Get in Touch
          </Link>
        </div>
      </div>
      <figure className="p-portrait p-entrance p-delay-two">
        <ThemePortrait width={400} height={480} priority />
        <figcaption>
          Business analysis, sector research and programme operations
        </figcaption>
      </figure>
    </section>
  );
}
