import type { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import { advisoryAreas, advisoryBySlug } from '@/data/advisory';
import { createPageMetadata } from '@/lib/metadata';
import { breadcrumbNode, PERSON_ID, webPageNode } from '@/lib/schema';
import { SITE_URL } from '@/lib/utils';

export const dynamicParams = false;
export function generateStaticParams() {
  return advisoryAreas.map(({ slug }) => ({ slug }));
}
type Props = { params: Promise<{ slug: string }> };
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const area = advisoryBySlug(slug);
  if (!area) notFound();
  return createPageMetadata({
    title: area.seoTitle,
    description: area.summary,
    path: `/services/${area.slug}/`,
  });
}
export default async function AdvisoryPage({ params }: Props) {
  const { slug } = await params;
  const area = advisoryBySlug(slug);
  if (!area) notFound();
  const url = `${SITE_URL}/services/${area.slug}/`;
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={[
          {
            ...webPageNode({
              url,
              name: area.title,
              description: area.summary,
              hasBreadcrumb: true,
            }),
            about: { '@id': PERSON_ID },
          },
          breadcrumbNode(url, [
            { name: 'Home', url: `${SITE_URL}/` },
            { name: 'Focus', url: `${SITE_URL}/services/` },
            { name: area.title, url },
          ]),
        ]}
      />
      <article className="advisory-page">
        <nav aria-label="Breadcrumb" className="advisory-breadcrumb">
          <Link href="/">Home</Link>
          <span aria-hidden="true"> / </span>
          <Link href="/services/">Focus</Link>
          <span aria-hidden="true"> / </span>
          <span>{area.title}</span>
        </nav>
        <header className="consulting-intro">
          <p className="eyebrow">Working notes · Strategy &amp; data</p>
          <h1 className="page-title">{area.title}</h1>
          <p className="page-subtitle page-prose">{area.summary}</p>
          <p className="page-prose">{area.audience}</p>
          <Link className="button" href="/contact/">
            Compare notes
          </Link>
        </header>
        <section className="consulting-section">
          <h2>{area.question}</h2>
          <p className="page-prose">{area.answer}</p>
        </section>
        <section className="consulting-section">
          <h2>Questions that draw me to this area</h2>
          <ul className="advisory-list">
            {area.situations.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="consulting-section">
          <h2>Examples of analysis I explore</h2>
          <ul className="advisory-list">
            {area.deliverables.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="consulting-section">
          <h2>How I approach the question</h2>
          <ol className="advisory-list advisory-list--ordered">
            {area.steps.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ol>
          <h3>Information that helps</h3>
          <ul className="advisory-list">
            {area.inputs.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </section>
        <section className="consulting-section">
          <h2>A few useful distinctions</h2>
          {area.faqs.map((item) => (
            <div className="advisory-answer" key={item.question}>
              <h3>{item.question}</h3>
              <p>{item.answer}</p>
            </div>
          ))}
        </section>
        <section className="consulting-section">
          <h2>Background and related reading</h2>
          <p className="page-prose">
            I’m Arun Vithyasegar, Senior Associate at Anna Incubator since 5
            October 2026, with a background in business analysis, startup
            ecosystem research, agriculture, and analytics. These pages collect
            my interests and approach alongside the projects I share here.
          </p>
          <p className="page-prose">
            <Link href="/about/">About my background</Link> ·{' '}
            <Link href="/projects/">Explore my analytics projects</Link> ·{' '}
            <Link href={`/writing/${area.article}/`}>
              Read the practical guide
            </Link>
          </p>
          <Link className="button" href="/contact/">
            Say hello
          </Link>
        </section>
        <section className="consulting-section">
          <h2>Explore related topics</h2>
          <ul className="advisory-list">
            {advisoryAreas
              .filter((item) => item.slug !== area.slug)
              .map((item) => (
                <li key={item.slug}>
                  <Link href={`/services/${item.slug}/`}>{item.title}</Link>
                </li>
              ))}
          </ul>
        </section>
      </article>
    </PageWrapper>
  );
}
