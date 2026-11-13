import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaGraph } from '@/components/Schema';
import AdvisoryLinks from '@/components/Services/AdvisoryLinks';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import PublicationLink from '@/components/Writing/PublicationLink';
import RecentWriting from '@/components/Writing/RecentWriting';
import { shipped } from '@/data/projects';
import { HOME_URL, profilePageNode } from '@/lib/schema';
import { AUTHOR_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
};
export default function HomePage() {
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[profilePageNode({ url: HOME_URL, name: AUTHOR_NAME })]}
      />
      <Hero />
      <section className="consulting-section" aria-labelledby="home-work">
        <div className="home-writing-header">
          <h2 id="home-work" className="section-heading">
            Selected work
          </h2>
          <Link href="/projects/">All projects →</Link>
        </div>
        <p className="page-prose">
          Public analytics projects, with code and dashboards you can explore.
        </p>
        <div className="home-writing-list">
          {shipped.slice(0, 2).map((project) => (
            <a
              key={project.title}
              href={project.dashboard ?? project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="home-writing-item"
            >
              <span className="home-writing-meta">
                {project.tech?.slice(0, 2).join(' · ')}
              </span>
              <div className="home-writing-copy">
                <h3>{project.title}</h3>
                <p>{project.desc}</p>
              </div>
              <span className="home-writing-arrow" aria-hidden="true">
                ↗
              </span>
              <span className="sr-only">(opens in a new tab)</span>
            </a>
          ))}
        </div>
      </section>
      <RecentWriting />
      <section className="consulting-section" aria-labelledby="home-focus">
        <div className="home-writing-header">
          <h2 id="home-focus" className="section-heading">
            What I’m exploring
          </h2>
          <Link href="/services/">All areas →</Link>
        </div>
        <p className="page-prose">
          Questions, frameworks, and working notes that connect my interests in
          strategy and data.
        </p>
        <AdvisoryLinks />
      </section>
      <PublicationLink />
      <section
        className="consulting-section consulting-cta"
        aria-labelledby="home-contact"
      >
        <p className="eyebrow">Always happy to compare notes</p>
        <h2 id="home-contact">Working on something interesting?</h2>
        <p>
          If something here connects with what you’re doing, I’d love to hear
          about it. I’m happy to share ideas, lend a hand where I can, or learn
          from a different perspective.
        </p>
        <Link href="/contact/" className="button">
          Say hello
        </Link>
      </section>
    </PageWrapper>
  );
}
