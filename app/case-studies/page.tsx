import Link from 'next/link';
import PageWrapper from '@/components/Template/PageWrapper';
import { caseStudies } from '@/data/caseStudies';
import { shipped } from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'Case studies',
  description:
    'Ongoing professional write-ups and public analytics projects covering programme reporting, market research and data analysis.',
  path: '/case-studies/',
});
export default function Page() {
  return (
    <PageWrapper>
      <div className="consulting-page">
        <h1 className="page-title">Case studies</h1>
        <p className="page-subtitle">
          The decision, the method and the evidence.
        </p>
        <h2>Ongoing write-ups</h2>
        <p>
          These write-ups are ongoing. Only non-confidential methods and
          verified findings will be published.
        </p>
        {caseStudies.map((study) => (
          <section className="consulting-section" key={study.slug}>
            <h3>
              <Link href={`/case-studies/${study.slug}/`}>{study.title} →</Link>
            </h3>
            <p>Ongoing · methods and findings under development.</p>
          </section>
        ))}
        <h2>Public project examples</h2>
        {shipped.slice(0, 2).map((project) => (
          <section className="consulting-section" key={project.title}>
            <h3>{project.title}</h3>
            <p>
              <strong>Why it matters:</strong> {project.whyItMatters}
            </p>
            <p>
              <a href={project.link}>Code</a> ·{' '}
              <a href={project.dashboard}>Dashboard</a> ·{' '}
              <Link href={`/projects/${project.slug}/`}>
                Method and findings
              </Link>
            </p>
          </section>
        ))}
      </div>
    </PageWrapper>
  );
}
