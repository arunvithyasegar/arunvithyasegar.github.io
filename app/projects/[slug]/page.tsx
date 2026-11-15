import { notFound } from 'next/navigation';
import PageWrapper from '@/components/Template/PageWrapper';
import { datasets } from '@/data/datasets';
import { createPageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return datasets.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const item = datasets.find((entry) => entry.slug === slug);
  return item
    ? createPageMetadata({
        title: item.title,
        description: item.question,
        path: `/projects/${slug}/`,
      })
    : {};
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const item = datasets.find((entry) => entry.slug === slug);
  if (!item) notFound();
  return (
    <PageWrapper>
      <article className="consulting-page">
        <p className="eyebrow">Monthly dataset series · publication record</p>
        <h1 className="page-title">{item.title}</h1>
        {[
          ['Question', item.question],
          ['Data source', item.source],
          ['Method', item.method],
          ['Findings', item.findings],
        ].map(([heading, body]) => (
          <section className="consulting-section" key={heading}>
            <h2>{heading}</h2>
            <p>{body}</p>
          </section>
        ))}
        <h2>Code link</h2>
        <a href={item.code}>View source code</a>
        <h2>Dashboard link</h2>
        <a href={item.dashboard}>Open dashboard</a>
        <h2>Last updated</h2>
        <p>{item.updated}</p>
      </article>
    </PageWrapper>
  );
}
