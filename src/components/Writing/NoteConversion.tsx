import { useId } from 'react';
import { NEWSLETTER_ACTION_URL, WRITING_TEMPLATES } from '@/data/conversion';
export function Newsletter({
  actionUrl = NEWSLETTER_ACTION_URL,
}: {
  actionUrl?: string;
}) {
  const id = useId();
  return (
    <section className="note-conversion" aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`}>Notes on data and strategy</h2>
      <p>A practical note every two weeks; a public dataset each month.</p>
      {actionUrl ? (
        <form action={actionUrl} method="post">
          <label htmlFor={`${id}-email`}>Email address</label>
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            autoComplete="email"
            required
          />
          <p>
            Subscribe to receive these updates by email. Unsubscribe through the
            newsletter provider.
          </p>
          <button className="button" type="submit">
            Subscribe
          </button>
        </form>
      ) : (
        <p>
          Newsletter signup is not open yet. TODO: configure the newsletter
          endpoint.
        </p>
      )}
    </section>
  );
}
export default function NoteConversion({ slug }: { slug: string }) {
  const template = WRITING_TEMPLATES[slug];
  return (
    <>
      {template && (
        <section className="note-conversion">
          <h2>Use this framework</h2>
          <a className="button" href={template} download>
            Download template
          </a>
        </section>
      )}
      <Newsletter />
    </>
  );
}
