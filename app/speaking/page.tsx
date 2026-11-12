import type { Metadata } from 'next';
import Link from 'next/link';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';
export const metadata: Metadata = createPageMetadata({
  title: 'Speaking',
  description:
    'Contact Arun Vithyasegar about workshops and discussions on startup strategy and analytics.',
  path: '/speaking/',
});
export default function SpeakingPage() {
  return (
    <PageWrapper>
      <section className="consulting-page">
        <h1 className="page-title">Speaking &amp; workshops</h1>
        <p className="page-prose">
          For a workshop or discussion on startup positioning, go-to-market
          planning, retention, pitch narratives, or business analytics, send me
          the audience, format, and topic you have in mind.
        </p>
        <p className="page-prose">
          There are no public event recordings listed here yet.
        </p>
        <Link href="/contact/" className="button">
          Discuss an event
        </Link>
      </section>
    </PageWrapper>
  );
}
