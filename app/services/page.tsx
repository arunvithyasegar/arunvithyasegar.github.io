import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaGraph } from '@/components/Schema';
import AdvisoryLinks from '@/components/Services/AdvisoryLinks';
import PageWrapper from '@/components/Template/PageWrapper';
import { services } from '@/data/services';
import { createPageMetadata } from '@/lib/metadata';
import { collectionPageNode, sectionPageNodes } from '@/lib/schema';

const description =
  'Arun Vithyasegar’s areas of work and exploration: growth metrics, board reporting, corporate strategy, investment, impact, and analytics.';
export const metadata: Metadata = createPageMetadata({
  title: 'Areas of work & exploration',
  description,
  path: '/services/',
});
export default function FocusPage() {
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={sectionPageNodes(
          collectionPageNode,
          '/services/',
          'Focus',
          description,
        )}
      />
      <div className="consulting-page">
        <header className="consulting-intro">
          <p className="eyebrow">A few threads I keep coming back to</p>
          <h1 className="page-title">Work, interests &amp; exploration</h1>
          <p className="page-subtitle page-prose">
            I’m interested in how organisations grow, how decisions get made,
            and how data helps us ask better questions. These pages bring
            together the frameworks and ideas I’m exploring.
          </p>
          <p className="page-prose">
            For concrete examples, take a look at my{' '}
            <Link href="/projects/">projects</Link> and{' '}
            <Link href="/resume/">experience</Link>. These notes describe my
            approach and interests; they aren’t a list of completed assignments.
          </p>
        </header>
        <section aria-labelledby="focus-areas">
          <h2 id="focus-areas" className="section-heading">
            Areas I’m exploring
          </h2>
          <AdvisoryLinks />
        </section>
        <div className="service-details">
          {services.map((item, index) => (
            <section key={item.id} id={item.id} className="service-detail">
              <span className="service-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2>{item.title}</h2>
                <p>{item.problem}</p>
                <h3>Some of the things I work through</h3>
                <ul>
                  {item.deliverables.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
        <section className="consulting-section">
          <h2>Happy to help, and happy to learn</h2>
          <p className="page-prose">
            If you’re thinking about similar questions, I’m always glad to
            exchange ideas, share what I’ve learned, or help you think something
            through.
          </p>
          <Link href="/contact/" className="button">
            Say hello
          </Link>
        </section>
      </div>
    </PageWrapper>
  );
}
