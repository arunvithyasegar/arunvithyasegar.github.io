import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import { engagements, services } from '@/data/services';
import { createPageMetadata } from '@/lib/metadata';
import { collectionPageNode, PERSON_ID, sectionPageNodes } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

const description =
  'Independent consulting for founders: brand strategy, GTM, retention, pitch decks and fundraising preparation, analytics, and ML models.';
export const metadata: Metadata = createPageMetadata({
  title: 'Consulting services',
  description,
  path: '/services/',
});
export default function ServicesPage() {
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          ...sectionPageNodes(
            collectionPageNode,
            '/services/',
            'Consulting services',
            description,
          ),
          ...services.map((service) => ({
            '@type': 'Service',
            '@id': `${SITE_URL}/services/#${service.id}`,
            name: service.title,
            description: service.problem,
            provider: { '@id': PERSON_ID },
            url: `${SITE_URL}/services/#${service.id}`,
          })),
        ]}
      />
      <div className="consulting-page">
        <header className="consulting-intro">
          <p className="eyebrow">Work with me</p>
          <h1 className="page-title">
            Strategy you can act on.
            <br />
            Analysis you can use.
          </h1>
          <p className="page-subtitle page-prose">
            For founders and small teams who need to sharpen their story, plan a
            launch, understand customer behaviour, or make better use of their
            data.
          </p>
          <Link href="/contact/" className="button">
            Discuss your brief
          </Link>
        </header>
        <div className="service-details">
          {services.map((service, index) => (
            <section
              key={service.id}
              id={service.id}
              className="service-detail"
            >
              <span className="service-number">
                {String(index + 1).padStart(2, '0')}
              </span>
              <div>
                <h2>{service.title}</h2>
                <p>{service.problem}</p>
                <h3>What we can work towards</h3>
                <ul>
                  {service.deliverables.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <Link href={`/contact/?service=${service.id}`}>
                  Discuss this service →
                </Link>
              </div>
            </section>
          ))}
        </div>
        <section className="consulting-section" aria-labelledby="engagements">
          <h2 id="engagements">Three ways to work together</h2>
          <div className="service-grid engagement-grid">
            {engagements.map((item) => (
              <article className="service-card" key={item.title}>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </article>
            ))}
          </div>
          <p className="page-prose">
            Every engagement starts with a brief and a conversation. You receive
            a written scope covering deliverables, fee, milestones, and what I
            need from your team before work begins.
          </p>
        </section>
        <section className="consulting-section" aria-labelledby="fit">
          <h2 id="fit">A useful first engagement has a clear decision</h2>
          <p className="page-prose">
            A launch with an unclear audience. A deck with a weak market story.
            A funnel with a drop-off nobody understands. A dataset that might
            support a forecasting model. Bring the problem; we will decide what
            work is worth doing.
          </p>
          <p className="page-prose">
            Fundraising support covers strategy and preparation. Investment
            decisions remain with investors. ML work is scoped around your data
            and evaluation needs.
          </p>
          <Link href="/contact/" className="button">
            Tell me about your project
          </Link>
        </section>
      </div>
    </PageWrapper>
  );
}
