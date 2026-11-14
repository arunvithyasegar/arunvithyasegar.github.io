import Link from 'next/link';
import { smartQuotes } from '@/lib/typography';
import { formatDate } from '@/lib/utils';
import { getWritingItems } from '@/lib/writing';

export default function Activity() {
  const items = getWritingItems()
    .filter((item) => item.date)
    .slice(0, 3);
  if (!items.length) return null;
  return (
    <section className="stats-activity" aria-labelledby="stats-activity">
      <p className="stats-source-label">From the writing archive</p>
      <h2 id="stats-activity">Recently published</h2>
      <ol>
        {items.map((item) => (
          <li key={item.url}>
            <time dateTime={item.date}>{formatDate(item.date)}</time>
            {item.isExternal ? (
              <a href={item.url} target="_blank" rel="noopener noreferrer">
                {smartQuotes(item.title)}
                <span className="sr-only"> (opens in a new tab)</span>
              </a>
            ) : (
              <Link href={item.url}>{smartQuotes(item.title)}</Link>
            )}
          </li>
        ))}
      </ol>
      <Link className="stats-text-link" href="/writing/">
        All writing →
      </Link>
    </section>
  );
}
