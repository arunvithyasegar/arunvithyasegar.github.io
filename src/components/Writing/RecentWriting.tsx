import Link from 'next/link';
import { smartQuotes } from '@/lib/typography';
import { formatDate } from '@/lib/utils';
import { getWritingItems } from '@/lib/writing';

export default function RecentWriting() {
  const items = getWritingItems()
    .filter((item) => item.date)
    .slice(0, 3);
  if (!items.length) return null;
  return (
    <section
      className="consulting-section"
      aria-labelledby="home-writing-title"
    >
      <div className="home-writing-header">
        <h2 id="home-writing-title" className="section-heading">
          Latest writing
        </h2>
        <Link href="/writing/">All articles →</Link>
      </div>
      <p className="page-prose">
        Practical notes on strategy, growth, fundraising preparation, and
        working with data.
      </p>
      <div className="home-writing-list">
        {items.map((item) => {
          const content = (
            <>
              <span className="home-writing-meta">
                {formatDate(item.date)} · {item.source}
              </span>
              <div className="home-writing-copy">
                <h3>{smartQuotes(item.title)}</h3>
                <p>{smartQuotes(item.description)}</p>
              </div>
              <span className="home-writing-arrow" aria-hidden="true">
                {item.isExternal ? '↗' : '→'}
              </span>
            </>
          );
          return item.isExternal ? (
            <a
              key={item.url}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="home-writing-item"
            >
              {content}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          ) : (
            <Link key={item.url} href={item.url} className="home-writing-item">
              {content}
            </Link>
          );
        })}
      </div>
    </section>
  );
}
