import { SchemaGraph } from '@/components/Schema';
import AdvisoryLinks from '@/components/Services/AdvisoryLinks';
import PageWrapper from '@/components/Template/PageWrapper';
import { contributions } from '@/data/professional';
import { createPageMetadata } from '@/lib/metadata';
import { collectionPageNode, sectionPageNodes } from '@/lib/schema';

const description =
  'Business intelligence, sector research, startup programme operations, project monitoring and business analysis in Tamil Nadu.';
export const metadata = createPageMetadata({
  title: 'Expertise and working frameworks',
  description,
  path: '/services/',
});
export default function Page() {
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={sectionPageNodes(
          collectionPageNode,
          '/services/',
          'Expertise',
          description,
        )}
      />
      <div className="consulting-page">
        <header className="consulting-intro">
          <h1 className="page-title">What I bring</h1>
          <p className="page-subtitle">
            Professional capabilities for investment, innovation and enterprise
            development organisations.
          </p>
        </header>
        <div className="service-details">
          {contributions.map((item) => (
            <section id={item.id} key={item.id} className="service-detail">
              <div>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </div>
            </section>
          ))}
        </div>
        <section id="frameworks" className="consulting-section">
          <h2>Working frameworks</h2>
          <p>Public notes on analysis and reporting methods.</p>
          <AdvisoryLinks />
          <div id="brand">
            <h3>Company positioning</h3>
            <p>
              Research audiences, alternatives and the evidence behind a
              company’s value proposition.
            </p>
          </div>
          <div id="gtm">
            <h3>Market entry research</h3>
            <p>
              Map customer segments, market context and questions for further
              evaluation.
            </p>
          </div>
          <div id="retention">
            <h3>Cohort analysis</h3>
            <p>
              Define activation, repeat behaviour and the observation window
              before interpreting retention.
            </p>
          </div>
          <div id="fundraising">
            <h3>Investment evidence</h3>
            <p>
              Separate claims, assumptions and supporting evidence in investment
              materials.
            </p>
          </div>
          <div id="analytics">
            <h3>Data quality and KPI definitions</h3>
            <p>
              Validate sources, definitions and reporting periods before
              comparing performance.
            </p>
          </div>
          <div id="ml">
            <h3>Forecast evaluation</h3>
            <p>
              Compare analytical models with a simple baseline and document
              their limitations.
            </p>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
