import type { Metadata } from 'next';

import Certifications from '@/components/Resume/Certifications';
import Education from '@/components/Resume/Education';
import Experience from '@/components/Resume/Experience';
import PrintButton from '@/components/Resume/PrintButton';
import ResumeNav from '@/components/Resume/ResumeNav';
import Skills from '@/components/Resume/Skills';
import PageWrapper from '@/components/Template/PageWrapper';
import contact, { type ContactId } from '@/data/contact';
import profile from '@/data/profile.json';
import certifications from '@/data/resume/certifications';
import degrees from '@/data/resume/degrees';
import { categories, skills } from '@/data/resume/skills';
import work from '@/data/resume/work';
import { createPageMetadata } from '@/lib/metadata';
import { RESUME_JSON_PATH, RESUME_JSON_URL } from '@/lib/resumeJson';
import { smartQuotes } from '@/lib/typography';
import { AUTHOR_NAME, SITE_URL } from '@/lib/utils';

const resumeMetadata = createPageMetadata({
  title: 'Resume',
  description: `${AUTHOR_NAME}'s experience in business analysis, startup ecosystems, and analytics. Senior Associate at Anna Incubator.`,
  path: '/resume/',
});

export const metadata: Metadata = {
  ...resumeMetadata,
  // The visible chip serves readers; the alternate lets tools discover the
  // machine-readable document without scraping page copy. Keep the canonical
  // that createPageMetadata already supplied when adding the new type.
  alternates: {
    ...resumeMetadata.alternates,
    types: {
      'application/json': RESUME_JSON_URL,
    },
  },
};

/** A URL as it should read on paper: no protocol, no `www.`, no trailing slash. */
function displayUrl(url: string): string {
  return url.replace(/^https?:\/\/(?:www\.)?/, '').replace(/\/$/, '');
}

/**
 * Looks a destination up by its stable data key rather than its display label,
 * so copy edits cannot break the printed header. Throws rather than falling
 * back, because a silently empty `href` on a printed resume is worse than a
 * failed build.
 */
function contactLink(id: ContactId): string {
  const item = contact.find((entry) => entry.id === id);
  if (!item) {
    throw new Error(`No "${id}" entry in src/data/contact.ts`);
  }
  return item.link;
}

export default function ResumePage() {
  // One read, shared by the headline span and every tenure; baked at build time.
  const now = Date.now();
  const github = contactLink('github');
  const linkedin = contactLink('linkedin');

  return (
    <PageWrapper>
      <section className="resume-page">
        <header className="resume-header">
          <div className="resume-header-row">
            {/* Paper hides the header and footer that carry the name, so
                there the title is the name. */}
            <h1 className="resume-title">
              <span className="resume-screen-title">Resume</span>{' '}
              <span className="resume-print-name">
                {smartQuotes(profile.name)}
              </span>
            </h1>
            <div className="resume-actions">
              <PrintButton />
              {/* Document-relative on purpose: /resume/ may live below a
                  repository base path, while a root-relative href would escape
                  it. ../resume.json resolves correctly in both deployments. */}
              <a
                href={`..${RESUME_JSON_PATH}`}
                className="button button-secondary button-compact"
                title="JSON Resume"
                aria-label="JSON Resume"
              >
                JSON
              </a>
            </div>
          </div>
          <p className="resume-summary">
            Senior Associate at Anna Incubator since 5 October 2026. My
            background spans startup ecosystem research, agricultural markets,
            business processes, and data analysis with SQL, Python, and Power
            BI. I also offer independent strategy and analytics consulting.
          </p>
          {/* Print-only, but real markup rather than CSS `content`, so it is
              selectable and linkable. Destinations come from shared contact
              data, while the location comes from the shared profile. */}
          <address className="resume-print-contact">
            <span>{profile.currentCity}</span>
            <a href={`${SITE_URL}/`}>{displayUrl(SITE_URL)}</a>
            <a href={`mailto:${profile.email}`}>{profile.email}</a>
            <a href={github}>{displayUrl(github)}</a>
            <a href={linkedin}>{displayUrl(linkedin)}</a>
          </address>
        </header>

        <ResumeNav />

        <div className="resume-content">
          <section id="experience" className="resume-section">
            <Experience data={work} now={now} />
          </section>

          <section id="education" className="resume-section">
            <Education data={degrees} />
          </section>

          <section id="skills" className="resume-section">
            <Skills skills={skills} categories={categories} />
          </section>

          <section id="certifications" className="resume-section">
            <Certifications data={certifications} />
          </section>
        </div>
      </section>
    </PageWrapper>
  );
}
