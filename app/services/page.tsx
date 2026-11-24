import Link from 'next/link';
import { SchemaGraph } from '@/components/Schema';
import AdvisoryLinks from '@/components/Services/AdvisoryLinks';
import PageWrapper from '@/components/Template/PageWrapper';
import { capabilityExamples, relatedMethods } from '@/data/expertise';
import { contributions } from '@/data/professional';
import profile from '@/data/profile.json';
import { createPageMetadata } from '@/lib/metadata';
import { collectionPageNode, sectionPageNodes } from '@/lib/schema';

const description =
  'Arun Vithyasegar’s approach to business intelligence, sector research, startup programme operations and business analysis, with public projects and working frameworks.';
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
      <div className="consulting-page expertise-page">
        <header className="expertise-intro">
          <div>
            <p className="eyebrow">Expertise &amp; approach</p>
            <h1 className="page-title">
              Making evidence useful
              <br />
              for the next decision.
            </h1>
            <p className="expertise-lead">
              I bring together business analysis, sector research and startup
              programme experience to help teams understand what is happening
              and what needs attention.
            </p>
            <div className="expertise-actions">
              <Link className="button button-primary" href="/projects/">
                Explore my work
              </Link>
              <Link className="button button-secondary" href="/resume/">
                View my experience
              </Link>
            </div>
          </div>
          <aside
            className="expertise-context"
            aria-label="Professional context"
          >
            <p className="eyebrow">Where this comes from</p>
            <p>
              <strong>{profile.role}</strong>
              <br />
              {profile.employer}
            </p>
            <p>
              Experience across agriculture, supply chains, health technology
              and incubation.
            </p>
            <Link href="/about/">More about my background</Link>
          </aside>
        </header>
        <nav className="expertise-jumps" aria-label="Expertise page sections">
          <a href="#capabilities">Capabilities</a>
          <a href="#public-work">Public work</a>
          <a href="#frameworks">Working frameworks</a>
          <a href="#connect">Get in touch</a>
        </nav>
        <section
          id="capabilities"
          className="expertise-section"
          aria-labelledby="capabilities-title"
        >
          <header className="section-header">
            <h2 id="capabilities-title" className="section-heading">
              What I bring to a team
            </h2>
          </header>
          <p className="expertise-section-intro">
            The questions I work through, and the kinds of working documents
            that can make them easier to answer.
          </p>
          <div className="expertise-capabilities">
            {contributions.map((item) => {
              const example = capabilityExamples[item.id];
              return (
                <section
                  id={item.id}
                  key={item.id}
                  className="expertise-capability"
                  aria-labelledby={`${item.id}-title`}
                >
                  <div>
                    <h3 id={`${item.id}-title`}>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                  <div>
                    <p className="expertise-question">{example.question}</p>
                    <p>{example.approach}</p>
                    <p className="expertise-output">
                      <strong>A useful output</strong> {example.output}
                    </p>
                  </div>
                </section>
              );
            })}
          </div>
        </section>
        <section
          id="public-work"
          className="expertise-section"
          aria-labelledby="public-work-title"
        >
          <header className="section-header">
            <h2 id="public-work-title" className="section-heading">
              Explore the approach in practice
            </h2>
          </header>
          <p className="expertise-section-intro">
            Public, self-directed projects you can inspect. These are separate
            from my professional responsibilities and internal programme work.
          </p>
          <div className="expertise-evidence">
            <article>
              <p className="eyebrow">Market research · Python</p>
              <h3>Electrical machinery trade analysis</h3>
              <p>
                Explore India’s export patterns using UN Comtrade data from
                2016–2024, including market comparisons and volatility.
              </p>
              <p className="expertise-output">
                Useful for asking better market-prioritisation questions; trade
                totals alone do not establish demand.
              </p>
              <Link href="/projects/un-trade/">Explore the trade project</Link>
            </article>
            <article>
              <p className="eyebrow">Text analysis · NLP</p>
              <h3>News sentiment analysis</h3>
              <p>
                Fetch headlines, classify their sentiment with TextBlob and make
                patterns in media coverage easier to explore.
              </p>
              <p className="expertise-output">
                A screening signal for closer reading, with the limits of
                automated interpretation kept visible.
              </p>
              <Link href="/projects/news-sentiment/">
                Explore the sentiment project
              </Link>
            </article>
          </div>
        </section>
        <section
          id="frameworks"
          className="expertise-section"
          aria-labelledby="frameworks-title"
        >
          <header className="section-header">
            <h2 id="frameworks-title" className="section-heading">
              Working frameworks
            </h2>
          </header>
          <p className="expertise-section-intro">
            Public notes on growth metrics, board reporting, investment and
            organisational decisions. They describe how I approach a question,
            rather than a record of completed mandates.
          </p>
          <AdvisoryLinks />
          <details className="expertise-methods">
            <summary>Explore related methods</summary>
            <div className="expertise-method-grid">
              {relatedMethods.map((method) => (
                <section id={method.id} key={method.id}>
                  <h3>{method.title}</h3>
                  <p>{method.description}</p>
                  <Link href={method.href}>{method.label}</Link>
                </section>
              ))}
            </div>
          </details>
        </section>
        <section
          id="connect"
          className="expertise-connect"
          aria-labelledby="connect-title"
        >
          <div>
            <p className="eyebrow">A useful conversation</p>
            <h2 id="connect-title">Working on a similar question?</h2>
            <p>
              I’m happy to exchange ideas or discuss roles in analytics,
              research, programme operations and enterprise development.
            </p>
          </div>
          <div className="expertise-actions">
            <Link className="button button-primary" href="/contact/">
              Get in touch
            </Link>
            <Link className="button button-secondary" href="/hire/">
              For employers
            </Link>
          </div>
        </section>
      </div>
    </PageWrapper>
  );
}
