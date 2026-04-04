/**
 * Main Application Entry Point
 * Initializes and coordinates all portfolio modules
 */

import { ParticleManager } from './particles';
import { CursorManager } from './cursor';
import { NavigationManager } from './navigation';
import { ProjectFilterManager } from './project-filter';
import { AgeCalculator } from './age-calculator';
import { GitHubStatsManager } from './github-stats';
import { ContactFormHandler } from './form-handler';
import { ExternalLinksHandler } from './external-links';
import type { PageType } from './types';

export class PortfolioApp {
  private particleManager: ParticleManager;
  private cursorManager: CursorManager;
  private navigationManager: NavigationManager;
  private projectFilterManager: ProjectFilterManager | null;
  private ageCalculator: AgeCalculator;
  private githubStatsManager: GitHubStatsManager;
  private formHandler: ContactFormHandler;
  private externalLinksHandler: ExternalLinksHandler;
  private isInitialized: boolean;

  constructor() {
    this.particleManager = new ParticleManager();
    this.cursorManager = new CursorManager();
    this.navigationManager = new NavigationManager();
    this.projectFilterManager = null;
    this.ageCalculator = new AgeCalculator('1999-08-06T01:24:00Z');
    this.githubStatsManager = new GitHubStatsManager('arunv8055');
    this.formHandler = new ContactFormHandler();
    this.externalLinksHandler = new ExternalLinksHandler();
    this.isInitialized = false;
  }

  /**
   * Initialize the application
   */
  init(): void {
    if (this.isInitialized) return;

    console.log('Initializing Portfolio App...');

    // Initialize core features
    this.particleManager.createParticles();
    this.cursorManager.init();
    this.externalLinksHandler.init();

    // Initialize navigation with callback
    this.navigationManager.init((page) => this.onNavigate(page));

    // Initialize page-specific features
    this.initPageFeatures();

    // Start age calculator
    this.ageCalculator.start();

    // Initialize GitHub stats
    this.githubStatsManager.init();

    // Initialize contact form
    this.formHandler.init(
      (data) => this.onFormSuccess(data),
      (error) => this.onFormError(error)
    );

    // Setup event listeners
    this.setupEventListeners();

    this.isInitialized = true;
    console.log('Portfolio App initialized successfully!');
  }

  /**
   * Initialize page-specific features
   */
  private initPageFeatures(): void {
    // Initialize project filter if on projects page
    const projectsPage = document.getElementById('projects-page');
    if (projectsPage && document.querySelectorAll('.project-card').length > 0) {
      this.projectFilterManager = new ProjectFilterManager();
      this.projectFilterManager.init();
    }
  }

  /**
   * Handle navigation events
   */
  private onNavigate(page: PageType): void {
    console.log(`Navigated to: ${page}`);

    // Lazy initialize page-specific features
    if (page === 'projects' && !this.projectFilterManager) {
      this.projectFilterManager = new ProjectFilterManager();
      this.projectFilterManager.init();
    }
  }

  /**
   * Handle successful form submission
   */
  private onFormSuccess(data: { name: string; email: string; message: string }): void {
    console.log('Form submitted successfully:', data);
    // Could add analytics tracking here
  }

  /**
   * Handle form submission error
   */
  private onFormError(error: Error): void {
    console.error('Form submission error:', error);
  }

  /**
   * Setup global event listeners
   */
  private setupEventListeners(): void {
    // Handle window resize
    window.addEventListener('resize', () => {
      this.particleManager.onResize();
    });

    // Handle visibility change (pause animations when tab is hidden)
    document.addEventListener('visibilitychange', () => {
      if (document.hidden) {
        this.ageCalculator.stop();
      } else {
        this.ageCalculator.start();
      }
    });

    // Handle keyboard shortcuts
    document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
  }

  /**
   * Handle keyboard shortcuts
   */
  private handleKeyboardShortcuts(e: KeyboardEvent): void {
    // Alt + Number shortcuts for navigation
    if (e.altKey && e.key >= '1' && e.key <= '6') {
      e.preventDefault();
      const pages: PageType[] = ['about', 'resume', 'projects', 'stats', 'contact'];
      const index = parseInt(e.key) - 1;
      
      if (index < pages.length) {
        this.navigationManager.navigateTo(pages[index]);
      }
    }

    // Escape key to reset filters on projects page
    if (e.key === 'Escape') {
      const currentPage = this.navigationManager.getCurrentPage();
      if (currentPage === 'projects' && this.projectFilterManager) {
        this.projectFilterManager.reset();
      }
    }
  }

  /**
   * Navigate to a specific page programmatically
   */
  navigateTo(page: PageType): void {
    this.navigationManager.navigateTo(page);
  }

  /**
   * Get current page
   */
  getCurrentPage(): PageType {
    return this.navigationManager.getCurrentPage();
  }

  /**
   * Refresh GitHub stats
   */
  async refreshGitHubStats(): Promise<void> {
    await this.githubStatsManager.refresh();
  }

  /**
   * Reset project filters
   */
  resetProjectFilters(): void {
    if (this.projectFilterManager) {
      this.projectFilterManager.reset();
    }
  }

  /**
   * Destroy the application and cleanup
   */
  destroy(): void {
    this.ageCalculator.stop();
    this.cursorManager.destroy();
    this.particleManager.clear();
    this.isInitialized = false;
  }
}

// Auto-initialize when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    const app = new PortfolioApp();
    app.init();
    
    // Expose app globally for debugging (remove in production)
    (window as any).portfolioApp = app;
  });
} else {
  const app = new PortfolioApp();
  app.init();
  
  // Expose app globally for debugging (remove in production)
  (window as any).portfolioApp = app;
}
