import type { Metadata } from 'next';
import Link from 'next/link';
import CopyEmail from '@/components/Home/CopyEmail';
import FeaturedWork from '@/components/Home/FeaturedWork';
import Workflow from '@/components/Home/Workflow';
import { SchemaGraph } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import PublicationLink from '@/components/Writing/PublicationLink';
import RecentWriting from '@/components/Writing/RecentWriting';
import contact from '@/data/contact';
import profile from '@/data/profile.json';
import { HOME_URL, profilePageNode } from '@/lib/schema';
import { AUTHOR_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/utils';

export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
};
const helpGroups = [
  {
    title: 'What I write about',
    items: [
      'Startup strategy',
      'Growth metrics',
      'Fundraising preparation',
      'Board reporting',
      'Investment & impact',
    ],
  },
  {
    title: 'What I can help with',
    items: [
      'Startup & market analysis',
      'KPI dashboards',
      'Investor materials',
      'Market research',
      'Ecosystem mapping',
      'Data storytelling',
    ],
  },
  {
    title: 'Who it is for',
    items: [
      'Founders & operators',
      'Investors',
      'Incubators',
      'Research teams',
      'Ecosystem collaborators',
    ],
  },
];
export default function HomePage() {
  const linkedin = contact.find((item) => item.id === 'linkedin');
  return (
    <PageWrapper mainClassName="premium-home">
      <SchemaGraph
        nodes={[profilePageNode({ url: HOME_URL, name: AUTHOR_NAME })]}
      />
      <Hero />
      <section className="p-proof" aria-label="Current role and focus">
        <div>
          <span>Currently</span>
          <p>
            <strong>{profile.role}</strong>
            <br />
            <Link href="/startup-ecosystem/">{profile.employer}</Link> ·{' '}
            {profile.currentCity}
          </p>
        </div>
        <div>
          <span>Current focus</span>
          <p>
            Startup strategy · Growth metrics
            <br />
            Board reporting · Investment &amp; impact
          </p>
        </div>
        <div>
          <span>The work</span>
          <p>
            <Link href="/projects/">Public data projects</Link>
            <br />
            <Link href="/services/">Practical notes &amp; frameworks</Link>
          </p>
        </div>
      </section>
      <FeaturedWork />
      <RecentWriting />
      <section className="p-section" aria-labelledby="home-focus">
        <div className="p-section-head">
          <div>
            <p className="p-section-num">03 / A useful conversation</p>
            <h2 id="home-focus">How I can help</h2>
          </div>
          <p>
            Happy to exchange ideas, work through a question, or lend a hand
            where I can.
          </p>
        </div>
        <div className="p-help">
          {helpGroups.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <ul>
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p className="p-help-more">
          <Link href="/services/">Explore my working notes →</Link>
        </p>
      </section>
      <Workflow />
      <PublicationLink />
      <section className="p-contact" aria-labelledby="home-contact">
        <div>
          <p className="p-status">
            <span className="p-dot" />
            Open to conversations and collaborations
          </p>
          <h2 id="home-contact">
            Have a dataset, decision, or strategy question?
          </h2>
          <p>Tell me what you’re working on. A few lines are enough.</p>
        </div>
        <div className="p-contact-actions">
          <Link href="/contact/" className="p-button p-primary">
            Start a conversation <span aria-hidden="true">→</span>
          </Link>
          {linkedin && (
            <a
              className="p-button"
              href={linkedin.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn <span aria-hidden="true">→</span>
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          <CopyEmail />
        </div>
      </section>
    </PageWrapper>
  );
}
