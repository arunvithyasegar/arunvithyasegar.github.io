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
const conversationStarters = [
  {
    title: 'A project caught my eye',
    description:
      'Ask about the approach, the code, or something you’d like to explore further.',
    subject: 'A question about your portfolio',
  },
  {
    title: 'I’m thinking through a question',
    description:
      'Compare notes on strategy, growth, data, or the startup ecosystem.',
    subject: 'An idea to compare notes on',
  },
  {
    title: 'Let’s connect',
    description: 'Share a perspective, a useful resource, or a simple hello.',
    subject: 'Hello Arun',
  },
];

export default function ContactPage() {
  return (
    <PageWrapper>
      <section className="contact-page consulting-contact portfolio-contact">
        <p className="eyebrow">Good conversations start somewhere</p>
        <h1 className="page-title">Say hello</h1>
        <p className="page-prose contact-lede">
          Something here sparked a thought? I’m happy to compare notes, talk
          through a question, or help where I can.
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
        <section
          className="contact-starters"
          aria-labelledby="conversation-start"
        >
          <h2 id="conversation-start">An easy place to start</h2>
          <p>Choose a starting point, or just write what’s on your mind.</p>
          <div className="contact-starter-grid">
            {conversationStarters.map((item) => (
              <a
                key={item.title}
                className="contact-starter"
                href={`mailto:${profile.email}?subject=${encodeURIComponent(item.subject)}`}
              >
                <h3>
                  {item.title} <span aria-hidden="true">↗</span>
                </h3>
                <p>{item.description}</p>
              </a>
            ))}
          </div>
          <p className="contact-hint">
            These links open your email app. You can also copy the address
            above. No formal introduction needed.
          </p>
        </section>
        <h2 className="contact-profile-heading">Elsewhere on the web</h2>
        <ContactIcons includeEmail={false} labelled />
      </section>
    </PageWrapper>
  );
}
