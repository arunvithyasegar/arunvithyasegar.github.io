import Link from 'next/link';
import PageWrapper from '@/components/Template/PageWrapper';
import { RESUME_PDF_PATH } from '@/data/conversion';
import { createPageMetadata } from '@/lib/metadata';
export const metadata = createPageMetadata({
  title: 'For hiring managers',
  description:
    'SQL, Python / Pandas, Power BI, Tableau and JIRA. Domain focus: health insurance, agri-tech and the startup ecosystem.',
  path: '/hire/',
});
export default function Page() {
  return (
    <PageWrapper>
      <div className="consulting-page">
        <h1 className="page-title">For hiring managers</h1>
        <p className="page-subtitle">
          Data and strategy for reporting, market analysis and operating
          decisions.
        </p>
        <section className="consulting-section">
          <h2>Selected wins — evidence pending</h2>
          <ul>
            <li>
              TODO: Reporting win — baseline → outcome, unit, period,
              contribution and source.
            </li>
            <li>
              TODO: Analysis win — decision supported, measured outcome, period
              and source.
            </li>
            <li>
              TODO: Delivery win — time or quality improvement, baseline, period
              and source.
            </li>
          </ul>
        </section>
        <section className="consulting-section">
          <h2>Skills stack</h2>
          <p>SQL · Python / Pandas · Power BI · Tableau · JIRA</p>
          <h2>Domain focus</h2>
          <p>Health insurance · Agri-tech · Startup ecosystem</p>
        </section>
        <section className="consulting-section">
          <h2>Resume and experience</h2>
          {RESUME_PDF_PATH ? (
            <Link
              className="button"
              href={RESUME_PDF_PATH}
              download
              prefetch={false}
            >
              Download resume (PDF)
            </Link>
          ) : (
            <>
              <button className="button" type="button" disabled>
                Download resume (PDF) — pending
              </button>
              <p>TODO: upload approved resume PDF and configure its path.</p>
            </>
          )}
          <p>
            <Link href="/resume/">View experience online</Link> ·{' '}
            <Link href="/contact/">Discuss a role</Link>
          </p>
        </section>
      </div>
    </PageWrapper>
  );
}
