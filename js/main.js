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
export class PortfolioApp {
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
    init() {
        if (this.isInitialized)
            return;
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
        this.formHandler.init((data) => this.onFormSuccess(data), (error) => this.onFormError(error));
        // Setup event listeners
        this.setupEventListeners();
        this.isInitialized = true;
        console.log('Portfolio App initialized successfully!');
    }
    /**
     * Initialize page-specific features
     */
    initPageFeatures() {
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
    onNavigate(page) {
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
    onFormSuccess(data) {
        console.log('Form submitted successfully:', data);
        // Could add analytics tracking here
    }
    /**
     * Handle form submission error
     */
    onFormError(error) {
        console.error('Form submission error:', error);
    }
    /**
     * Setup global event listeners
     */
    setupEventListeners() {
        // Handle window resize
        window.addEventListener('resize', () => {
            this.particleManager.onResize();
        });
        // Handle visibility change (pause animations when tab is hidden)
        document.addEventListener('visibilitychange', () => {
            if (document.hidden) {
                this.ageCalculator.stop();
            }
            else {
                this.ageCalculator.start();
            }
        });
        // Handle keyboard shortcuts
        document.addEventListener('keydown', (e) => this.handleKeyboardShortcuts(e));
    }
    /**
     * Handle keyboard shortcuts
     */
    handleKeyboardShortcuts(e) {
        // Alt + Number shortcuts for navigation
        if (e.altKey && e.key >= '1' && e.key <= '6') {
            e.preventDefault();
            const pages = ['about', 'resume', 'projects', 'stats', 'contact'];
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
    navigateTo(page) {
        this.navigationManager.navigateTo(page);
    }
    /**
     * Get current page
     */
    getCurrentPage() {
        return this.navigationManager.getCurrentPage();
    }
    /**
     * Refresh GitHub stats
     */
    async refreshGitHubStats() {
        await this.githubStatsManager.refresh();
    }
    /**
     * Reset project filters
     */
    resetProjectFilters() {
        if (this.projectFilterManager) {
            this.projectFilterManager.reset();
        }
    }
    /**
     * Destroy the application and cleanup
     */
    destroy() {
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
        window.portfolioApp = app;
    });
}
else {
    const app = new PortfolioApp();
    app.init();
    // Expose app globally for debugging (remove in production)
    window.portfolioApp = app;
}
//# sourceMappingURL=main.js.map