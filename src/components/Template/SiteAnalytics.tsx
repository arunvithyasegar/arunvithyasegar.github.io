import { GoogleTagManager } from '@next/third-parties/google';

/** GA4 tags are managed in this container; do not mount a second GA snippet. */
export default function SiteAnalytics() {
  return <GoogleTagManager gtmId="GTM-K8J34B3G" />;
}
