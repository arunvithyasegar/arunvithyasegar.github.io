import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaGraph } from '@/components/Schema';
import AdvisoryLinks from '@/components/Services/AdvisoryLinks';
import PageWrapper from '@/components/Template/PageWrapper';
import { offers } from '@/data/offers';
import { services } from '@/data/services';
import { createPageMetadata } from '@/lib/metadata';
import { collectionPageNode, sectionPageNodes } from '@/lib/schema';

const description =
  'KPI dashboards, investor-readiness reviews and market research for startups, health-insurance and agri-tech teams.';
export const metadata: Metadata = createPageMetadata({
  title: 'Services',
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
          'Services',
          description,
        )}
      />
      <div className="consulting-page">
        <header className="consulting-intro">
          <p className="eyebrow">Scoped work, clear deliverables</p>
          <h1 className="page-title">Data and strategy services</h1>
          <p className="page-subtitle page-prose">
            Choose a focused engagement for your next reporting cycle, investor
            meeting or market decision.
          </p>
          <Link href="/case-studies/">See case studies →</Link>
        </header>
        <div className="service-details">
          {offers.map((offer) => (
            <section key={offer.id} id={offer.id} className="service-detail">
              <div>
                <h2>{offer.title}</h2>
                <p>
                  <strong>Who it’s for:</strong> {offer.audience}
                </p>
                <h3>Deliverables</h3>
                <ul>
                  {offer.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <p>
                  <strong>Timeline:</strong> {offer.timeline}
                </p>
                <p>Starting from ₹{offer.price || 'TODO — confirm price'}</p>
                <Link
                  className="button"
                  href={`/contact/?offer=${offer.id}#project-brief`}
                >
                  Discuss {offer.title}
                </Link>
              </div>
            </section>
          ))}
        </div>
        <section aria-labelledby="frameworks">
          <h2 id="frameworks" className="section-heading">
            Frameworks
          </h2>
          <p>Topic notes and methods behind the offers.</p>
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
                <h3>Working framework</h3>
                <ul>
                  {item.deliverables.map((example) => (
                    <li key={example}>{example}</li>
                  ))}
                </ul>
              </div>
            </section>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
