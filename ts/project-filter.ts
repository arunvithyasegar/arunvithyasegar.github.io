/**
 * Project Filter Manager
 * Handles filtering and searching of projects
 */

import type { FilterOptions } from './types';

export class ProjectFilterManager {
  private projects: HTMLElement[];
  private filterButtons: NodeListOf<Element>;
  private searchInput: HTMLInputElement | null;
  private currentFilters: FilterOptions;

  constructor() {
    this.projects = Array.from(document.querySelectorAll('.project-card'));
    this.filterButtons = document.querySelectorAll('[data-filter]');
    this.searchInput = document.getElementById('project-search') as HTMLInputElement | null;
    this.currentFilters = {};
  }

  /**
   * Initialize project filtering
   */
  init(): void {
    // Add click handlers to filter buttons
    this.filterButtons.forEach((button) => {
      button.addEventListener('click', (e) => this.handleFilterClick(e));
    });

    // Add input handler to search
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => this.handleSearchInput(e));
    }

    // Add keyboard navigation for filters
    this.addKeyboardNavigation();
  }

  /**
   * Handle filter button click
   */
  private handleFilterClick(e: Event): void {
    e.preventDefault();

    const target = e.currentTarget as HTMLElement;
    const filterValue = target.dataset.filter;

    // Update active state on buttons
    this.filterButtons.forEach((btn) => btn.classList.remove('active'));
    target.classList.add('active');

    // Apply filter
    if (filterValue === 'all') {
      this.currentFilters = {};
    } else {
      this.currentFilters.category = filterValue;
    }

    this.applyFilters();
  }

  /**
   * Handle search input
   */
  private handleSearchInput(e: Event): void {
    const target = e.target as HTMLInputElement;
    this.currentFilters.searchQuery = target.value.toLowerCase().trim();
    this.applyFilters();
  }

  /**
   * Apply current filters to projects
   */
  private applyFilters(): void {
    const { category, searchQuery } = this.currentFilters;

    this.projects.forEach((project) => {
      const element = project as HTMLElement;
      let shouldShow = true;

      // Filter by category
      if (category && category !== 'all') {
        const projectCategory = element.dataset.category;
        if (projectCategory !== category) {
          shouldShow = false;
        }
      }

      // Filter by search query
      if (searchQuery && shouldShow) {
        const title = element.querySelector('h3')?.textContent?.toLowerCase() || '';
        const description = element.querySelector('p')?.textContent?.toLowerCase() || '';
        const tags = Array.from(element.querySelectorAll('.skill-tag'))
          .map((tag) => tag.textContent?.toLowerCase() || '')
          .join(' ');

        const searchableText = `${title} ${description} ${tags}`;
        
        if (!searchableText.includes(searchQuery)) {
          shouldShow = false;
        }
      }

      // Show/hide with animation
      if (shouldShow) {
        element.style.display = 'block';
        setTimeout(() => {
          element.style.opacity = '1';
          element.style.transform = 'translateY(0)';
        }, 10);
      } else {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        setTimeout(() => {
          element.style.display = 'none';
        }, 300);
      }
    });

    // Update results count
    this.updateResultsCount();
  }

  /**
   * Update displayed results count
   */
  private updateResultsCount(): void {
    const visibleCount = this.projects.filter(
      (project) => (project as HTMLElement).style.display !== 'none'
    ).length;

    const countElement = document.getElementById('project-count');
    if (countElement) {
      countElement.textContent = `${visibleCount} project${visibleCount !== 1 ? 's' : ''}`;
    }
  }

  /**
   * Add keyboard navigation for filter buttons
   */
  private addKeyboardNavigation(): void {
    const filterArray = Array.from(this.filterButtons);
    
    filterArray.forEach((button, index) => {
      (button as HTMLElement).addEventListener('keydown', (e: KeyboardEvent) => {
        const key = e.key;
        let newIndex = index;

        if (key === 'ArrowRight' || key === 'ArrowDown') {
          e.preventDefault();
          newIndex = (index + 1) % filterArray.length;
        } else if (key === 'ArrowLeft' || key === 'ArrowUp') {
          e.preventDefault();
          newIndex = (index - 1 + filterArray.length) % filterArray.length;
        } else if (key === 'Enter' || key === ' ') {
          e.preventDefault();
          button.dispatchEvent(new MouseEvent('click', { bubbles: true }));
        }

        if (newIndex !== index) {
          (filterArray[newIndex] as HTMLElement).focus();
        }
      });
    });
  }

  /**
   * Reset all filters
   */
  reset(): void {
    this.currentFilters = {};
    
    // Reset UI
    this.filterButtons.forEach((btn) => btn.classList.remove('active'));
    const allButton = document.querySelector('[data-filter="all"]');
    if (allButton) {
      allButton.classList.add('active');
    }

    if (this.searchInput) {
      this.searchInput.value = '';
    }

    this.applyFilters();
  }

  /**
   * Get unique categories from projects
   */
  getCategories(): string[] {
    const categories = new Set<string>();
    
    this.projects.forEach((project) => {
      const category = (project as HTMLElement).dataset.category;
      if (category) {
        categories.add(category);
      }
    });

    return Array.from(categories);
  }

  /**
   * Filter projects programmatically
   */
  filterBy(options: FilterOptions): void {
    this.currentFilters = options;
    this.applyFilters();
  }
}
