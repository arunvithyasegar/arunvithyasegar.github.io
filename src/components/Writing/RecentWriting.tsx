import Link from 'next/link';
import { getAllPosts } from '@/lib/posts';
import { smartQuotes } from '@/lib/typography';
import { getWritingItems } from '@/lib/writing';

export default function RecentWriting() {
  const items = getWritingItems()
    .filter((item) => item.date)
    .slice(0, 3);
  const readingTimes = new Map(
    getAllPosts().map((post) => [
      `/writing/${post.slug}/`,
      Math.max(1, Math.ceil(post.content.trim().split(/\s+/).length / 200)),
    ]),
  );
  if (!items.length) return null;
  return (
    <section className="p-section" aria-labelledby="home-writing-title">
      <div className="p-section-head">
        <div>
          <p className="p-section-num">02 / Writing</p>
          <h2 id="home-writing-title">Notes &amp; frameworks</h2>
        </div>
        <p>
          Short, practical notes for founders and operators making decisions
          with imperfect information.{' '}
          <Link href="/writing/">All articles →</Link>
        </p>
      </div>
      <div className="p-reading">
        {items.map((item) => {
          const minutes = readingTimes.get(item.url);
          const content = (
            <>
              <span className="p-tag">
                {minutes ? `${minutes} min read` : item.source}
              </span>
              <h3>{smartQuotes(item.title)}</h3>
              <p>{smartQuotes(item.description)}</p>
              <span className="p-note-link">
                Read the note <span aria-hidden="true">→</span>
              </span>
            </>
          );
          return (
            <article key={item.url} className="p-note">
              {item.isExternal ? (
                <a
                  className="p-note-content"
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                  <span className="sr-only"> (opens in a new tab)</span>
                </a>
              ) : (
                <Link className="p-note-content" href={item.url}>
                  {content}
                </Link>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
