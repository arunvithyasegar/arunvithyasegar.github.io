/**
 * Navigation Manager
 * Handles page navigation and transitions
 */

import type { PageType } from './types';

export class NavigationManager {
  private currentPage: PageType;
  private navLinks: NodeListOf<Element>;
  private pages: NodeListOf<Element>;
  private homePage: HTMLElement | null;
  private appContainer: HTMLElement | null;
  private onNavigateCallback?: (page: PageType) => void;

  constructor() {
    this.currentPage = 'home';
    this.navLinks = document.querySelectorAll('.nav-link, .home-link');
    this.pages = document.querySelectorAll('.page');
    this.homePage = document.getElementById('home-page');
    this.appContainer = document.getElementById('app-container');
  }

  /**
   * Initialize navigation
   */
  init(onNavigate?: (page: PageType) => void): void {
    this.onNavigateCallback = onNavigate;

    // Add click handlers to all navigation links
    this.navLinks.forEach((link) => {
      link.addEventListener('click', (e) => this.handleNavigation(e));
    });

    // Handle home page transition
    if (this.homePage) {
      this.homePage.addEventListener('transitionend', (e) => {
        const target = e.target as HTMLElement;
        if (target === this.homePage && this.homePage.style.opacity === '0') {
          this.showAppContainer();
        }
      });
    }
  }

  /**
   * Handle navigation click
   */
  private handleNavigation(e: Event): void {
    e.preventDefault();

    const target = e.currentTarget as HTMLElement;
    const targetPage = target.dataset.page as PageType;

    if (!targetPage || targetPage === this.currentPage) return;

    // Hide home page on first navigation
    if (this.currentPage === 'home' && this.homePage) {
      this.hideHomePage();
    }

    // Update active states
    this.setActiveLink(target);
    this.showPage(targetPage);

    // Trigger animations for specific pages
    this.triggerPageAnimations(targetPage);

    // Callback
    if (this.onNavigateCallback) {
      this.onNavigateCallback(targetPage);
    }
  }

  /**
   * Hide home page with transition
   */
  private hideHomePage(): void {
    if (!this.homePage) return;

    this.homePage.style.opacity = '0';
  }

  /**
   * Show app container after home page is hidden
   */
  private showAppContainer(): void {
    if (!this.appContainer) return;

    this.appContainer.classList.remove('hidden');
    
    // Force reflow
    this.appContainer.offsetHeight;
    
    this.appContainer.style.opacity = '1';

    // Set default active page (about)
    const aboutPage = document.getElementById('about-page');
    const aboutLink = document.querySelector('[data-page="about"]');
    
    if (aboutPage && aboutLink) {
      aboutPage.classList.add('active');
      aboutPage.style.opacity = '1';
      aboutLink.classList.add('active');
      this.currentPage = 'about';
    }
  }

  /**
   * Set active navigation link
   */
  private setActiveLink(target: HTMLElement): void {
    this.navLinks.forEach((link) => link.classList.remove('active'));
    target.classList.add('active');
  }

  /**
   * Show target page with transition
   */
  private showPage(pageType: PageType): void {
    // Hide all pages
    this.pages.forEach((page) => {
      const pageEl = page as HTMLElement;
      pageEl.classList.remove('active');
      pageEl.style.opacity = '0';
    });

    // Show target page
    const targetPage = document.getElementById(`${pageType}-page`);
    if (targetPage) {
      targetPage.classList.add('active');
      
      // Force reflow
      targetPage.offsetHeight;
      
      targetPage.style.opacity = '1';
      this.currentPage = pageType;
    }
  }

  /**
   * Trigger page-specific animations
   */
  private triggerPageAnimations(pageType: PageType): void {
    switch (pageType) {
      case 'resume':
        this.animateProgressBars();
        break;
      case 'stats':
        setTimeout(() => this.animateCounters(), 500);
        break;
    }
  }

  /**
   * Animate progress bars on resume page
   */
  private animateProgressBars(): void {
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach((bar) => {
      if (!bar.classList.contains('animate-progress')) {
        bar.classList.add('animate-progress');
      }
    });
  }

  /**
   * Animate counters on stats page
   */
  private animateCounters(): void {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;

    counters.forEach((counter) => {
      const element = counter as HTMLElement;
      const text = element.textContent || '';
      const target = text === '150+' ? 150 : parseInt(text.replace(/[^0-9]/g, ''), 10);
      
      if (isNaN(target)) return;

      let current = 0;
      const increment = target / speed;

      const updateCount = () => {
        current += increment;
        if (current < target) {
          element.textContent = Math.floor(current).toString();
          setTimeout(updateCount, 1);
        } else {
          element.textContent = target + (element.id === 'github-commits' ? '+' : '');
        }
      };

      updateCount();
    });
  }

  /**
   * Navigate to a specific page programmatically
   */
  navigateTo(page: PageType): void {
    const targetLink = document.querySelector(`[data-page="${page}"]`);
    if (targetLink) {
      targetLink.dispatchEvent(new MouseEvent('click', { bubbles: true }));
    }
  }

  /**
   * Get current page
   */
  getCurrentPage(): PageType {
    return this.currentPage;
  }
}
