import ContactIcons from '@/components/Contact/ContactIcons';
import PageWrapper from '@/components/Template/PageWrapper';
import contact from '@/data/contact';
import { contactInvitation } from '@/data/professional';
import profile from '@/data/profile.json';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'Contact',
  description:
    'Connect with Arun V. about opportunities in analytics, research, programme operations and enterprise development.',
  path: '/contact/',
});
export default function Page() {
  const linkedin = contact.find((item) => item.id === 'linkedin');
  return (
    <PageWrapper>
      <section className="contact-page consulting-contact portfolio-contact">
        <h1 className="page-title">Let’s connect</h1>
        <p className="page-prose contact-lede">{contactInvitation}</p>
        <div className="p-actions">
          <a
            className="button"
            href={`mailto:${profile.email}?subject=${encodeURIComponent('Career opportunity')}`}
          >
            Email Me
          </a>
          {linkedin && (
            <a
              className="button button-secondary"
              href={linkedin.link}
              target="_blank"
              rel="noopener noreferrer"
            >
              Connect on LinkedIn
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          )}
        </div>
        <p className="contact-address">
          <a href={`mailto:${profile.email}`}>{profile.email}</a>
        </p>
        <h2 className="contact-profile-heading">Elsewhere on the web</h2>
        <ContactIcons includeEmail={false} labelled />
      </section>
    </PageWrapper>
  );
}
