import type { Metadata } from 'next';
import ContactIcons from '@/components/Contact/ContactIcons';
import PageWrapper from '@/components/Template/PageWrapper';
import profile from '@/data/profile.json';
import { createPageMetadata } from '@/lib/metadata';
export const metadata: Metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Discuss a dashboard, investor-readiness review, research brief or corporate role with Arun Vithyasegar.',
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
          Need a reporting dashboard, an investor-readiness review or a market
          research brief? Share the decision you need to make and the scope of
          work.
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
                  {item.title} <span aria-hidden="true">→</span>
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
        <section
          id="project-brief"
          className="consulting-section"
          aria-labelledby="brief-title"
        >
          <h2 id="brief-title">Send a short project brief</h2>
          <p>Include these fields in your email:</p>
          <ul>
            <li>
              <strong>What you’re working on:</strong> the decision,
              deliverable, available data and intended audience.
            </li>
            <li>
              <strong>Timeline:</strong> target date and key milestones.
            </li>
            <li>
              <strong>Budget range:</strong> your expected range in INR, or say
              it is still being defined.
            </li>
          </ul>
          <a
            className="button"
            href={`mailto:${profile.email}?subject=${encodeURIComponent('Project brief')}&body=${encodeURIComponent('What I’m working on:\n\nTimeline:\n\nBudget range (INR):\n')}`}
          >
            Email a project brief
          </a>
          <p>This opens an editable template in your email app.</p>
        </section>
        <h2 className="contact-profile-heading">Elsewhere on the web</h2>
        <ContactIcons includeEmail={false} labelled />
      </section>
    </PageWrapper>
  );
}
