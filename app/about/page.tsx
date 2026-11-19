import type { Metadata } from 'next';

import AboutContent from '@/components/About/Sections';
import { SchemaGraph } from '@/components/Schema';
import PageWrapper from '@/components/Template/PageWrapper';
import { aboutMarkdown } from '@/data/about';
import profile from '@/data/profile.json';
import { createPageMetadata } from '@/lib/metadata';
import { profilePageNode, sectionPageNodes } from '@/lib/schema';
import { AUTHOR_NAME } from '@/lib/utils';

const ABOUT_DESCRIPTION = `Learn about ${AUTHOR_NAME} - ${profile.role} at ${profile.employer} with experience in business analysis, sector research and startup programme operations in Tamil Nadu.`;

export const metadata: Metadata = createPageMetadata({
  title: 'About | Business analysis and startup ecosystems',
  description: ABOUT_DESCRIPTION,
  path: '/about/',
});

export default function AboutPage() {
  return (
    <PageWrapper>
      <SchemaGraph
        nodes={sectionPageNodes(
          profilePageNode,
          '/about/',
          'About',
          ABOUT_DESCRIPTION,
        )}
      />
      <section className="about-page">
        <header className="about-header">
          <h1 className="page-title">About {AUTHOR_NAME}</h1>
        </header>
        <AboutContent markdown={aboutMarkdown} />
      </section>
    </PageWrapper>
  );
}
