import type { Metadata } from 'next';
import Link from 'next/link';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import { createPageMetadata } from '@/lib/metadata';
import { PERSON_ID, sectionPageNodes, webPageNode } from '@/lib/schema';

const description =
  'Arun Vithyasegar, Senior Associate at Anna Incubator: personal background and notes on startup ecosystems, growth, investment, and impact in Tamil Nadu and beyond.';

export const metadata: Metadata = createPageMetadata({
  title: 'Anna Incubator & startup ecosystem',
  description,
  path: '/startup-ecosystem/',
});

export default function StartupEcosystemPage() {
  const [page, breadcrumb] = sectionPageNodes(
    webPageNode,
    '/startup-ecosystem/',
    'Startup ecosystem',
    description,
  );
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[{ ...page, about: { '@id': PERSON_ID } }, breadcrumb]}
      />
      <div className="consulting-page">
        <header className="consulting-intro">
          <p className="eyebrow">People, evidence &amp; early-stage ideas</p>
          <h1 className="page-title">
            Anna Incubator &amp; my startup ecosystem interests
          </h1>
          <p className="page-subtitle page-prose">
            I’m Arun Vithyasegar, Senior Associate at Anna Incubator since 5
            October 2026. This is where I bring together my background,
            questions, and public work around startups, strategy, and data.
          </p>
          <p className="page-prose">
            This is my personal portfolio. For incubation programmes,
            applications, or official announcements, visit{' '}
            <a href="https://annaincubator.org/">
              Anna Incubator’s official website
            </a>
            .
          </p>
        </header>
        <section className="consulting-section">
          <h2>Starting with Tamil Nadu</h2>
          <p className="page-prose">
            My background connects agriculture, business analysis, and the
            startup ecosystem in Tamil Nadu, India. I studied Agricultural
            Science at Tamil Nadu Agricultural University and began a Business
            Analyst internship at StartupTN in 2022, working on startup
            research, policy briefs, and ecosystem dashboards. Later work across
            agricultural markets and digital health shaped how I approach market
            readiness, operations, and evidence.
          </p>
          <p className="page-prose">
            You can follow that journey in my{' '}
            <Link href="/resume/">experience</Link> and explore the code and
            dashboards in my <Link href="/projects/">project portfolio</Link>.
          </p>
        </section>
        <section className="consulting-section">
          <h2>Questions I’m exploring around startup incubation</h2>
          <p className="page-prose">
            I’m interested in what helps a founder move from an idea to a
            clearer decision: understanding a customer, testing a route to
            market, choosing useful metrics, and making assumptions visible.
            These are areas of exploration, with frameworks I share openly:
          </p>
          <ul>
            <li>
              <Link href="/services/growth-revenue-metrics/">
                Growth, ARR, and retention
              </Link>
              : connecting acquisition and recurring revenue to customer
              behaviour and unit economics.
            </li>
            <li>
              <Link href="/services/board-reporting-kpi/">
                KPIs and board reporting
              </Link>
              : turning operational data into decisions, owners, and follow-up
              questions.
            </li>
            <li>
              <Link href="/services/corporate-fundraising-strategy/">
                Corporate structure and fundraising preparation
              </Link>
              : working through a pitch narrative, governance questions, and
              financial assumptions.
            </li>
            <li>
              <Link href="/services/investment-impact-assessment/">
                Investment strategy and impact assessment
              </Link>
              : separating evidence, risk, intended outcomes, and what still
              needs to be tested.
            </li>
          </ul>
          <p className="page-prose">
            My <Link href="/writing/">writing</Link> expands on these methods;
            it doesn’t disclose confidential employer or founder information.
          </p>
        </section>
        <section className="consulting-section">
          <h2>
            Learning across South India, India, Asia, and global ecosystems
          </h2>
          <p className="page-prose">
            Tamil Nadu is a starting point for my interests, and I’m keen to
            learn from founders, incubator teams, researchers, and operators
            across South India and the wider Indian startup ecosystem. I’m also
            interested in how approaches from Asia and global startup ecosystems
            translate to a local market.
          </p>
          <p className="page-prose">
            The useful comparison is specific: which customer problem, which
            constraints, what evidence, and what changes when the market
            changes? A growth model or investment framework is only useful when
            those differences are understood.
          </p>
        </section>
        <section className="consulting-section">
          <h2>Happy to compare notes</h2>
          <p className="page-prose">
            If you’re thinking about similar questions, I’m happy to exchange
            ideas, share something useful, or lend a hand where I can.
          </p>
          <Link href="/contact/" className="button">
            Say hello
          </Link>
        </section>
      </div>
    </PageWrapper>
  );
}
