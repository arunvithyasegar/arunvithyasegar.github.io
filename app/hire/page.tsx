import Link from 'next/link';
import PageWrapper from '@/components/Template/PageWrapper';
import { RESUME_PDF_PATH } from '@/data/conversion';
import {
  careerInterests,
  contributions,
  professionalSkills,
  professionalSummary,
  regionalInterest,
} from '@/data/professional';
import profile from '@/data/profile.json';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'Professional profile for employers',
  description:
    'Business analysis, market intelligence, startup evaluation and programme operations for investment and enterprise development organisations in Tamil Nadu.',
  path: '/hire/',
});
export default function Page() {
  return (
    <PageWrapper>
      <div className="consulting-page">
        <h1 className="page-title">For employers</h1>
        <p className="page-subtitle">
          Incubation Operations | Startup Analytics | Digital Process Design
        </p>
        <p>{professionalSummary}</p>
        <p>
          Currently serving as a {profile.role} at {profile.employer}, Chennai.
        </p>
        <section className="consulting-section">
          <h2>What I bring</h2>
          {contributions.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </section>
        <section className="consulting-section">
          <h2>Skills</h2>
          {professionalSkills.map((group) => (
            <p key={group.title}>
              <strong>{group.title}:</strong> {group.items.join(' · ')}
            </p>
          ))}
        </section>
        <section className="consulting-section">
          <h2>Career interests</h2>
          <p>{careerInterests}</p>
          <p>{regionalInterest}</p>
          <p>
            I am interested in contributing to investment, innovation and
            enterprise development organisations such as Guidance Tamil Nadu.
          </p>
        </section>
        <Link
          className="button"
          href={RESUME_PDF_PATH}
          download
          prefetch={false}
        >
          Download resume (PDF)
        </Link>
        <p>
          <Link href="/resume/">View experience online</Link> ·{' '}
          <Link href="/contact/">Get in touch</Link>
        </p>
      </div>
    </PageWrapper>
  );
}
