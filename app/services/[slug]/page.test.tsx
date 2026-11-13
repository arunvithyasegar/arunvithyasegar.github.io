import { renderToStaticMarkup } from 'react-dom/server';
import { describe, expect, it } from 'vitest';
import { advisoryAreas } from '@/data/advisory';
import { SITE_URL } from '@/lib/utils';
import sitemap from '../../sitemap';
import AdvisoryPage, { generateMetadata, generateStaticParams } from './page';

describe('portfolio topic discovery', () => {
  it('exports each listed service once and includes it in the sitemap', () => {
    const params = generateStaticParams();
    expect(new Set(params.map((item) => item.slug)).size).toBe(
      advisoryAreas.length,
    );
    for (const { slug } of params) {
      expect(
        sitemap().filter(
          (item) => item.url === `${SITE_URL}/services/${slug}/`,
        ),
      ).toHaveLength(1);
    }
  });
  it.each(advisoryAreas)(
    '$slug has matching visible, canonical, and structured page identities',
    async (area) => {
      const params = Promise.resolve({ slug: area.slug });
      const metadata = await generateMetadata({ params });
      const url = `${SITE_URL}/services/${area.slug}/`;
      expect(metadata.alternates?.canonical).toBe(url);
      expect(metadata.openGraph?.url).toBe(url);
      const html = renderToStaticMarkup(await AdvisoryPage({ params }));
      const graph = JSON.parse(
        html.match(
          /<script type="application\/ld\+json">([\s\S]*?)<\/script>/,
        )?.[1] ?? '{}',
      );
      const service = graph['@graph'].find(
        (node: Record<string, unknown>) => node['@type'] === 'WebPage',
      );
      expect(service).toMatchObject({
        url,
        name: area.title,
        description: area.summary,
        about: { '@id': `${SITE_URL}/#person` },
      });
      expect(html).toContain(area.title.replaceAll('&', '&amp;'));
      expect(html).toContain(`href="/writing/${area.article}"`);
    },
  );
});
