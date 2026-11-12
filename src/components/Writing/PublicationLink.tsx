/** Only render the newsletter invitation after its actual publication URL is configured. */
export default function PublicationLink() {
  const configured = process.env.NEXT_PUBLIC_SUBSTACK_URL?.trim();
  if (!configured) return null;
  const url = new URL(configured);
  if (
    url.protocol !== 'https:' ||
    url.pathname !== '/' ||
    url.username ||
    url.password ||
    url.search ||
    url.hash
  ) {
    throw new Error(
      'NEXT_PUBLIC_SUBSTACK_URL must be the HTTPS publication homepage, without credentials, query, or fragment.',
    );
  }
  const subscribe = new URL('subscribe', `${url.href.replace(/\/+$/, '')}/`)
    .href;
  return (
    <section className="consulting-section" aria-labelledby="publication-title">
      <h2 id="publication-title" className="section-heading">
        Get the next essay
      </h2>
      <p className="page-prose">
        Subscribe on Substack for new writing on building a clearer story,
        growing a business, and making better decisions with data.
      </p>
      <a
        href={subscribe}
        className="button"
        target="_blank"
        rel="noopener noreferrer"
      >
        Subscribe on Substack
        <span className="sr-only"> (opens in a new tab)</span>
      </a>
    </section>
  );
}
