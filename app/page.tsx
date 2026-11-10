import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaGraph } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import projects from '@/data/projects';
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
      <section className="home-writing" aria-labelledby="home-projects-title">
        <div className="home-writing-header">
          <h2 id="home-projects-title" className="section-heading">
            Selected projects
          </h2>
          <Link href="/projects" className="home-writing-all">
            All projects <span aria-hidden="true">→</span>
          </Link>
        </div>
        <div className="home-writing-list">
          {projects.slice(0, 3).map((project) => (
            <Link
              key={project.title}
              href="/projects"
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
                →
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
}
