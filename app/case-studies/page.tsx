import Link from 'next/link';
import PageWrapper from '@/components/Template/PageWrapper';
import { caseStudies } from '@/data/caseStudies';
import { shipped } from '@/data/projects';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'Case studies',
  description:
    'Analytics case-study templates and public projects, with business context and explicit evidence gaps.',
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
        <h2>In development</h2>
        <p>
          These two stubs make missing evidence explicit. Results will be added
          only after verification.
        </p>
        {caseStudies.map((study) => (
          <section className="consulting-section" key={study.slug}>
            <h3>
              <Link href={`/case-studies/${study.slug}/`}>{study.title} →</Link>
            </h3>
            <p>TODO: complete scope, method and quantified results.</p>
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
