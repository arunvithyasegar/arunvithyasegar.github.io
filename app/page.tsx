import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaGraph } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import PublicationLink from '@/components/Writing/PublicationLink';
import RecentWriting from '@/components/Writing/RecentWriting';
import { shipped } from '@/data/projects';
import { services } from '@/data/services';
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
      <section className="consulting-section" aria-labelledby="home-services">
        <div className="home-writing-header">
          <h2 id="home-services" className="section-heading">
            From the business question to the next move
          </h2>
          <Link href="/services/">All services →</Link>
        </div>
        <div className="service-grid">
          {services.map((service) => (
            <Link
              key={service.id}
              href={`/services/#${service.id}`}
              className="service-card"
            >
              <h3>{service.title}</h3>
              <p>{service.problem}</p>
              <span className="service-more">
                Explore the scope <span aria-hidden="true">→</span>
              </span>
            </Link>
          ))}
        </div>
      </section>
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
      <PublicationLink />
      <section
        className="consulting-section consulting-cta"
        aria-labelledby="home-contact"
      >
        <p className="eyebrow">Start with one useful question</p>
        <h2 id="home-contact">
          What decision is your business trying to make?
        </h2>
        <p>
          Tell me what you are building, where you are stuck, and the outcome
          you need. We can define a useful first scope from there.
        </p>
        <Link href="/contact/" className="button">
          Send a project brief
        </Link>
      </section>
    </PageWrapper>
  );
}
