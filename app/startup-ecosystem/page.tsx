import Link from 'next/link';
import ProfessionalWork from '@/components/Home/ProfessionalWork';
import PageWrapper from '@/components/Template/PageWrapper';
import {
  aboutParagraphs,
  careerInterests,
  regionalInterest,
} from '@/data/professional';
import profile from '@/data/profile.json';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'Startup ecosystem and programme operations',
  description:
    'Startup evaluation, founder coordination, programme reporting and ecosystem research in Tamil Nadu.',
  path: '/startup-ecosystem/',
});
export default function Page() {
  return (
    <PageWrapper>
      <div className="consulting-page">
        <header className="consulting-intro">
          <h1 className="page-title">
            Startup ecosystem and programme operations
          </h1>
          <p className="page-subtitle">
            {profile.role} at {profile.employer}, Chennai.
          </p>
        </header>
        <p>{aboutParagraphs[1]}</p>
        <p>
          This is a personal professional portfolio. For incubation applications
          and official announcements, visit{' '}
          <a href="https://annaincubator.org/">
            Anna Incubator’s official website
          </a>
          .
        </p>
        <ProfessionalWork />
        <section className="consulting-section">
          <h2>Career interests in Tamil Nadu</h2>
          <p>{careerInterests}</p>
          <p>{regionalInterest}</p>
          <Link href="/resume/">View my experience →</Link>
        </section>
      </div>
    </PageWrapper>
  );
}
