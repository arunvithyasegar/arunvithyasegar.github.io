import Link from 'next/link';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'Professional discussions',
  description:
    'Notes on business analysis, sector research and startup ecosystem development.',
  path: '/speaking/',
});
export default function Page() {
  return (
    <PageWrapper>
      <section className="consulting-page">
        <h1 className="page-title">Professional discussions</h1>
        <p className="page-prose">
          My interests include business intelligence, sector research, project
          monitoring and startup programme operations.
        </p>
        <p className="page-prose">
          There are no public event recordings listed here yet.
        </p>
        <Link href="/writing/" className="button">
          Read my notes
        </Link>
      </section>
    </PageWrapper>
  );
}
