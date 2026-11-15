import { notFound } from 'next/navigation';
import CaseStudy from '@/components/Projects/CaseStudy';
import PageWrapper from '@/components/Template/PageWrapper';
import { caseStudies } from '@/data/caseStudies';
import { createPageMetadata } from '@/lib/metadata';

type Props = { params: Promise<{ slug: string }> };
export function generateStaticParams() {
  return caseStudies.map(({ slug }) => ({ slug }));
}
export async function generateMetadata({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  return study
    ? createPageMetadata({
        title: study.title,
        description: `Case study template: ${study.title}. Approach and verified-result placeholders.`,
        path: `/case-studies/${slug}/`,
      })
    : {};
}
export default async function Page({ params }: Props) {
  const { slug } = await params;
  const study = caseStudies.find((item) => item.slug === slug);
  if (!study) notFound();
  return (
    <PageWrapper>
      <CaseStudy study={study} />
    </PageWrapper>
  );
}
