import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaGraph } from '@/components/Schema';
import AdvisoryLinks from '@/components/Services/AdvisoryLinks';
import PageWrapper from '@/components/Template/PageWrapper';
import { advisoryAreas } from '@/data/advisory';
import { engagements, services } from '@/data/services';
import { createPageMetadata } from '@/lib/metadata';
import { collectionPageNode, PERSON_ID, sectionPageNodes } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

const description =
  'Strategy and performance advisory for founders, leadership teams, and boards: growth metrics, KPI reporting, corporate structure, fundraising, investment and impact analysis.';
export const metadata: Metadata = createPageMetadata({
  title: 'Strategy & Performance Advisory Services',
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
          ...advisoryAreas.map((area) => ({
            '@type': 'Service',
            '@id': `${SITE_URL}/services/${area.slug}/#service`,
            name: area.title,
            description: area.summary,
            provider: { '@id': PERSON_ID },
            url: `${SITE_URL}/services/${area.slug}/`,
          })),
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
            Strategy &amp; performance advisory.
            <br />
            Analysis you can use.
          </h1>
          <p className="page-subtitle page-prose">
            For founders, leadership teams, and boards who need a clear view of
            revenue quality, organisational performance, funding options, and
            investment impact.
          </p>
          <Link href="/contact/" className="button">
            Discuss your brief
          </Link>
        </header>
        <section aria-labelledby="advisory-areas">
          <h2 id="advisory-areas" className="section-heading">
            Advisory services
          </h2>
          <AdvisoryLinks />
        </section>
        <h2 className="section-heading">
          Supporting strategy and analytics capabilities
        </h2>
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
