import type { Metadata } from 'next';
import Link from 'next/link';
import ProfessionalWork from '@/components/Home/ProfessionalWork';
import Entry from '@/components/Projects/Entry';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import { datasets } from '@/data/datasets';
import { archive, shipped } from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';
import { collectionPageNode, sectionPageNodes } from '@/lib/schema';
import { AUTHOR_NAME } from '@/lib/utils';

const PAGE_TITLE = 'Projects';

/**
 * Built from the register itself, so the share text cannot claim a lineup the
 * page no longer has. Capped at three names to keep the description short
 * enough to survive a search result.
 */
const PROJECTS_DESCRIPTION = `Selected work from ${AUTHOR_NAME} — ${shipped
  .slice(0, 3)
  .map((project) => project.title)
  .join(', ')} — plus earlier projects and experiments.`;

function projectCountLabel(count: number): string {
  return `${count} ${count === 1 ? 'project' : 'projects'}`;
}

export const metadata: Metadata = createPageMetadata({
  title: PAGE_TITLE,
  description: PROJECTS_DESCRIPTION,
  path: '/projects/',
});

export default function ProjectsPage() {
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={sectionPageNodes(
          collectionPageNode,
          '/projects/',
          PAGE_TITLE,
          PROJECTS_DESCRIPTION,
        )}
      />
      <div className="projects-page">
        <header className="projects-header">
          <h1 className="page-title">{PAGE_TITLE}</h1>
          <p className="page-subtitle">
            Professional experience and public data projects. Work in
            development is marked ongoing. Only non-confidential summaries and
            public examples are shared.
          </p>
        </header>

        <ProfessionalWork />
        <section className="projects-group" aria-labelledby="projects-selected">
          <div className="section-header">
            <h2 id="projects-selected" className="section-heading">
              Public data projects
            </h2>
            {/* Counted, never typed. */}
            <p className="section-header-meta">
              {projectCountLabel(shipped.length)}
            </p>
          </div>
          <ol className="projects-register">
            {shipped.map((project) => (
              <li key={project.title}>
                <Entry data={project} />
              </li>
            ))}
          </ol>
        </section>

        <section className="projects-group" aria-labelledby="monthly-datasets">
          <h2 id="monthly-datasets" className="section-heading">
            Monthly dataset
          </h2>
          <p>
            One documented dataset per month: question, source, method, findings
            and reproducible links. Refresh dates and findings are pending
            verification.
          </p>
          <ul>
            {datasets.map((item) => (
              <li key={item.slug}>
                <Link href={`/projects/${item.slug}/`}>{item.title}</Link>
              </li>
            ))}
          </ul>
        </section>
        {/* The same list and the same row as the work above: the archive is
            a quieter part of one register, not a second kind of page. */}
        <section className="projects-group" aria-labelledby="projects-archive">
          <div className="section-header">
            <h2 id="projects-archive" className="section-heading">
              Archive
            </h2>
            <p className="section-header-meta">
              {projectCountLabel(archive.length)}
            </p>
          </div>
          <p className="projects-group-note">
            Agricultural data analysis and earlier explorations.
          </p>
          <ol className="projects-register">
            {archive.map((project) => (
              <li key={project.title}>
                <Entry data={project} />
              </li>
            ))}
          </ol>
        </section>
      </div>
    </PageWrapper>
  );
}
