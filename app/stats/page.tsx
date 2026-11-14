import type { Metadata } from 'next';
import Link from 'next/link';
import Activity from '@/components/Stats/Activity';
import LiveAge from '@/components/Stats/LiveAge';
import Personal from '@/components/Stats/Personal';
import Site from '@/components/Stats/Site';
import Work from '@/components/Stats/Work';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';

export const metadata: Metadata = createPageMetadata({
  title: 'Stats',
  description:
    'A living snapshot of Arun Vithyasegar’s projects, writing, current chapter, and the website behind the work.',
  path: '/stats/',
});

export default function StatsPage() {
  const snapshotAt = new Date().toISOString();
  return (
    <PageWrapper>
      <section className="stats-page">
        <header className="stats-header">
          <p className="stats-source-label">
            Life, work & a little transparency
          </p>
          <h1 className="page-title">By the numbers</h1>
          <p className="stats-subtitle">
            A living snapshot of what I’m building, learning, and maintaining.
          </p>
        </header>
        <LiveAge />
        <Work />
        <div className="stats-context-grid">
          <section aria-labelledby="stats-about-me">
            <Personal />
          </section>
          <Activity />
        </div>
        <section
          className="stats-section stats-under-hood"
          aria-labelledby="stats-this-site"
        >
          <div className="stats-section-intro">
            <div>
              <p className="stats-source-label">Updated on deployment</p>
              <h2 id="stats-this-site">Under the hood</h2>
            </div>
            <p>Public repository data and the code behind this site.</p>
          </div>
          <Site snapshotAt={snapshotAt} />
        </section>
        <section className="stats-invitation" aria-labelledby="stats-next">
          <h2 id="stats-next">Explore the work behind the numbers</h2>
          <p>
            Open a project, read a note, or see how my experience connects the
            two.
          </p>
          <div>
            <Link className="button" href="/projects/">
              Explore projects
            </Link>
            <Link className="button button-secondary" href="/writing/">
              Read my writing
            </Link>
          </div>
        </section>
      </section>
    </PageWrapper>
  );
}
