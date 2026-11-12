import type { Metadata } from 'next';
import ContactIcons from '@/components/Contact/ContactIcons';
import PageWrapper from '@/components/Template/PageWrapper';
import profile from '@/data/profile.json';
import { createPageMetadata } from '@/lib/metadata';
export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Discuss a consulting project with Arun Vithyasegar: strategy, growth, fundraising preparation, analytics, and ML.',
  path: '/contact/',
});
const brief = `Hi Arun,

I am building:
The problem I want help with:
The deliverable or decision I need:
My timeline:
My budget range:
Relevant links:
`;
export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="contact-page consulting-contact">
        <p className="eyebrow">Let’s make the brief clear</p>
        <h1 className="page-title">What are you working on?</h1>
        <p className="page-prose">
          For a strategy review, a defined project, or ongoing advisory support,
          send me a few details. I will review the fit and suggest a useful next
          step.
        </p>
        <a
          className="button"
          href={`mailto:${profile.email}?subject=${encodeURIComponent('Consulting enquiry')}&body=${encodeURIComponent(brief)}`}
        >
          Email a project brief
        </a>
        <p className="contact-address">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <div className="contact-brief">
          <h2>Include what you know</h2>
          <ul>
            <li>Your business, product, and target customer.</li>
            <li>
              The question you need answered or the problem you want to solve.
            </li>
            <li>
              The deliverable you have in mind, your timeline, and a budget
              range.
            </li>
            <li>
              A website, deck, or description of the available data, if
              relevant.
            </li>
          </ul>
        </div>
        <p className="page-prose">
          Independent consulting enquiries come directly to me. This site
          describes my own work and services.
        </p>
        <ContactIcons includeEmail={false} labelled />
      </section>
    </PageWrapper>
  );
}
