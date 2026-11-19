import type { Metadata } from 'next';
import Link from 'next/link';
import FeaturedWork from '@/components/Home/FeaturedWork';
import ProfessionalWork from '@/components/Home/ProfessionalWork';
import SectionRail from '@/components/Home/SectionRail';
import { SchemaGraph } from '@/components/Schema';
import Hero from '@/components/Template/Hero';
import PageWrapper from '@/components/Template/PageWrapper';
import RecentWriting from '@/components/Writing/RecentWriting';
import contact from '@/data/contact';
import {
  aboutParagraphs,
  careerInterests,
  contactInvitation,
  contributions,
  professionalSkills,
  regionalInterest,
} from '@/data/professional';
import profile from '@/data/profile.json';
import { HOME_URL, profilePageNode } from '@/lib/schema';
import { AUTHOR_NAME, SITE_DESCRIPTION, SITE_URL } from '@/lib/utils';
export const metadata: Metadata = {
  description: SITE_DESCRIPTION,
  alternates: { canonical: `${SITE_URL}/` },
};
export default function HomePage() {
  const linkedin = contact.find((item) => item.id === 'linkedin');
  return (
    <PageWrapper mainClassName="premium-home">
      <SchemaGraph
        nodes={[profilePageNode({ url: HOME_URL, name: AUTHOR_NAME })]}
      />
      <SectionRail />
      <Hero />
      <section className="p-section career-copy" aria-labelledby="home-about">
        <div className="p-section-head">
          <h2 id="home-about">About me</h2>
        </div>
        {aboutParagraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
        <p>
          <Link href="/about/">More about my background →</Link>
        </p>
      </section>
      <section className="p-section" aria-labelledby="home-contributions">
        <div className="p-section-head">
          <h2 id="home-contributions">What I bring</h2>
        </div>
        <div className="p-help">
          {contributions.map((item) => (
            <div key={item.id}>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
      <ProfessionalWork />
      <FeaturedWork />
      <section className="p-section" aria-labelledby="home-skills">
        <div className="p-section-head">
          <h2 id="home-skills">Skills</h2>
        </div>
        <div className="p-help">
          {professionalSkills.map((group) => (
            <div key={group.title}>
              <h3>{group.title}</h3>
              <p>{group.items.join(' · ')}</p>
            </div>
          ))}
        </div>
      </section>
      <section
        className="p-section career-copy"
        aria-labelledby="career-interests"
      >
        <div className="p-section-head">
          <h2 id="career-interests">Career interests</h2>
        </div>
        <p>{careerInterests}</p>
        <p>{regionalInterest}</p>
        <p>
          <Link href="/hire/">Professional profile for employers →</Link>
        </p>
      </section>
      <RecentWriting />
      <section
        id="conversation"
        className="p-contact"
        aria-labelledby="home-contact"
      >
        <div>
          <h2 id="home-contact">Let’s connect</h2>
          <p>{contactInvitation}</p>
        </div>
        <div className="p-contact-actions">
          <a className="p-button p-primary" href={`mailto:${profile.email}`}>
            Email Me
          </a>
          {linkedin && (
            <a
              className="p-button"
              href={linkedin.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
          <a className="p-contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </section>
    </PageWrapper>
  );
}
