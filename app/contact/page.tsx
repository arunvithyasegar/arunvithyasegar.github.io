import type { Metadata } from 'next';
import ContactIcons from '@/components/Contact/ContactIcons';
import PageWrapper from '@/components/Template/PageWrapper';
import profile from '@/data/profile.json';
import { createPageMetadata } from '@/lib/metadata';
export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Say hello to Arun Vithyasegar. Happy to exchange ideas, talk about projects, and help where I can.',
  path: '/contact/',
});
export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="contact-page consulting-contact">
        <p className="eyebrow">Good conversations start somewhere</p>
        <h1 className="page-title">Say hello</h1>
        <p className="page-prose">
          If you’re working on something interesting, have a question about a
          project, or want to compare notes, I’d be happy to hear from you.
        </p>
        <p className="page-prose">
          I’m always open to exchanging ideas and helping where I can—whether
          it’s making sense of a dataset, thinking through a growth question, or
          sharing a useful resource.
        </p>
        <a
          className="button"
          href={`mailto:${profile.email}?subject=${encodeURIComponent('Hello Arun')}`}
        >
          Email me
        </a>
        <p className="contact-address">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <ContactIcons includeEmail={false} labelled />
      </section>
    </PageWrapper>
  );
}
