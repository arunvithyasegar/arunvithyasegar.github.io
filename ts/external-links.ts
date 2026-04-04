/**
 * External Links Handler
 * Makes external links open in new tabs with proper security attributes
 */

export class ExternalLinksHandler {
  private currentHost: string;

  constructor() {
    this.currentHost = window.location.host;
  }

  /**
   * Initialize external links handler
   */
  init(): void {
    this.processLinks();
  }

  /**
   * Process all links and add target="_blank" to external ones
   */
  processLinks(): void {
    const links = document.querySelectorAll<HTMLAnchorElement>('a[href^="http"]');

    links.forEach((link) => {
      if (this.isExternalLink(link.href)) {
        link.target = '_blank';
        link.rel = 'noopener noreferrer';
        link.classList.add('external-link');
        
        // Optionally add icon to external links
        this.addExternalIcon(link);
      }
    });
  }

  /**
   * Check if a link is external
   */
  private isExternalLink(href: string): boolean {
    try {
      const url = new URL(href);
      return url.host !== this.currentHost;
    } catch {
      return false;
    }
  }

  /**
   * Add external link icon
   */
  private addExternalIcon(link: HTMLAnchorElement): void {
    // Only add if it doesn't already have an icon and isn't a nav link
    if (link.classList.contains('nav-link') || link.classList.contains('home-link')) {
      return;
    }

    // Check if link already has an icon
    const hasIcon = link.querySelector('i, svg');
    if (hasIcon) return;

    // Don't add icon to links that are just icons themselves
    if (link.querySelector('.fab, .fas, .far')) return;

    // Add icon
    const icon = document.createElement('i');
    icon.className = 'fas fa-external-link-alt ml-1 text-xs';
    icon.setAttribute('aria-hidden', 'true');
    link.appendChild(icon);
  }

  /**
   * Add click handler for analytics or other purposes
   */
  trackExternalLinks(tracker: (url: string) => void): void {
    document.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const link = target.closest('a[href^="http"]') as HTMLAnchorElement | null;

      if (link && this.isExternalLink(link.href)) {
        tracker(link.href);
      }
    });
  }
}
