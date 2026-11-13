import type { Metadata } from 'next';
import Link from 'next/link';
import FeaturedWork from '@/components/Home/FeaturedWork';
import { SchemaGraph } from '@/components/Schema';
import AdvisoryLinks from '@/components/Services/AdvisoryLinks';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import PublicationLink from '@/components/Writing/PublicationLink';
import RecentWriting from '@/components/Writing/RecentWriting';
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
      <nav className="portfolio-context" aria-label="A little context">
        <Link href="/startup-ecosystem/">
          <span>Now</span>Senior Associate · Anna Incubator{' '}
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/about/">
          <span>Background</span>Agriculture → strategy &amp; data{' '}
          <span aria-hidden="true">→</span>
        </Link>
        <Link href="/resume/">
          <span>The journey</span>Experience &amp; education{' '}
          <span aria-hidden="true">→</span>
        </Link>
      </nav>
      <FeaturedWork />
      <section className="consulting-section" aria-labelledby="home-approach">
        <div className="portfolio-section-heading">
          <div>
            <p className="eyebrow">A thread through the work</p>
            <h2 id="home-approach">From a question to a useful next step</h2>
          </div>
        </div>
        <ol className="portfolio-approach">
          <li>
            <span className="eyebrow">01 / Understand</span>
            <h3>Start with the decision</h3>
            <p>
              Who needs to act? What do they need to know? Get clear on the
              question before choosing a tool.
            </p>
          </li>
          <li>
            <span className="eyebrow">02 / Investigate</span>
            <h3>Work through the evidence</h3>
            <p>
              Explore the data, test assumptions, and make uncertainty visible.
              Keep the method open to scrutiny.
            </p>
          </li>
          <li>
            <span className="eyebrow">03 / Make useful</span>
            <h3>Leave something usable</h3>
            <p>
              A dashboard, a model, or a clear explanation—with definitions,
              limitations, and a next question.
            </p>
          </li>
        </ol>
      </section>
      <RecentWriting />
      <section className="consulting-section" aria-labelledby="home-focus">
        <div className="home-writing-header">
          <h2 id="home-focus" className="section-heading">
            What I’m exploring
          </h2>
          <Link href="/services/">All areas →</Link>
        </div>
        <p className="page-prose">
          Questions, frameworks, and working notes that connect my interests in
          strategy and data. My{' '}
          <Link href="/startup-ecosystem/">startup ecosystem interests</Link>{' '}
          connect that work with my Anna Incubator role and Tamil Nadu
          background.
        </p>
        <AdvisoryLinks />
      </section>
      <PublicationLink />
      <section
        className="consulting-section portfolio-invitation"
        aria-labelledby="home-contact"
      >
        <p className="eyebrow">Always happy to compare notes</p>
        <h2 id="home-contact">
          A question, an idea, or a different perspective?
        </h2>
        <p>
          If something here connects with what you’re doing, I’d love to hear
          about it. I’m happy to share ideas, lend a hand where I can, or learn
          from a different perspective.
        </p>
        <Link href="/contact/" className="button">
          Say hello
        </Link>
        <p className="invitation-note">
          A few lines are plenty. No polished brief needed.
        </p>
      </section>
    </PageWrapper>
  );
}
