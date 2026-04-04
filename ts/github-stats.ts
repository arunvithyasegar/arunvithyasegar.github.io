/**
 * GitHub Stats Manager
 * Fetches and displays GitHub statistics
 */

import type { GitHubStats } from './types';

export class GitHubStatsManager {
  private username: string;
  private stats: GitHubStats | null;
  private cacheDuration: number;
  private lastFetchTime: number;
  private cachedStats: GitHubStats | null;

  constructor(username: string, cacheDurationMinutes: number = 30) {
    this.username = username;
    this.stats = null;
    this.cacheDuration = cacheDurationMinutes * 60 * 1000;
    this.lastFetchTime = 0;
    this.cachedStats = null;
  }

  /**
   * Initialize and display GitHub stats
   */
  async init(): Promise<void> {
    await this.fetchStats();
    this.displayStats();
  }

  /**
   * Fetch GitHub statistics from API or use mock data
   */
  async fetchStats(): Promise<GitHubStats> {
    // Check cache first
    if (this.isCacheValid()) {
      return this.cachedStats!;
    }

    try {
      // Try to fetch from GitHub API
      const response = await fetch(`https://api.github.com/users/${this.username}`);
      
      if (!response.ok) {
        throw new Error('Failed to fetch GitHub stats');
      }

      const userData = await response.json();
      
      // Fetch repos for additional stats
      const reposResponse = await fetch(userData.repos_url);
      const reposData = await reposResponse.json();

      // Calculate total stars and forks
      const totalStars = reposData.reduce(
        (sum: number, repo: any) => sum + (repo.stargazers_count || 0),
        0
      );
      const totalForks = reposData.reduce(
        (sum: number, repo: any) => sum + (repo.forks_count || 0),
        0
      );

      // Fetch contributions (this is a simplified approach)
      const commits = await this.estimateCommits();

      this.stats = {
        repos: userData.public_repos || 0,
        stars: totalStars,
        forks: totalForks,
        commits: commits,
      };

      // Cache the results
      this.cachedStats = this.stats;
      this.lastFetchTime = Date.now();

      return this.stats;
    } catch (error) {
      console.warn('Using fallback GitHub stats:', error);
      
      // Fallback to mock data
      this.stats = this.getMockStats();
      return this.stats;
    }
  }

  /**
   * Estimate total commits (GitHub API doesn't provide this directly)
   */
  private async estimateCommits(): Promise<number> {
    // This is a simplified estimation
    // In production, you might want to use the GitHub GraphQL API
    // or maintain a running count
    return 150;
  }

  /**
   * Get mock/fallback stats
   */
  private getMockStats(): GitHubStats {
    return {
      repos: 12,
      stars: 24,
      forks: 8,
      commits: 150,
    };
  }

  /**
   * Check if cached stats are still valid
   */
  private isCacheValid(): boolean {
    if (!this.cachedStats) return false;
    return Date.now() - this.lastFetchTime < this.cacheDuration;
  }

  /**
   * Display stats in the DOM
   */
  displayStats(): void {
    if (!this.stats) return;

    const elements = {
      repos: document.getElementById('github-repos'),
      stars: document.getElementById('github-stars'),
      forks: document.getElementById('github-forks'),
      commits: document.getElementById('github-commits'),
    };

    if (elements.repos) {
      elements.repos.textContent = this.stats.repos.toString();
    }
    if (elements.stars) {
      elements.stars.textContent = this.stats.stars.toString();
    }
    if (elements.forks) {
      elements.forks.textContent = this.stats.forks.toString();
    }
    if (elements.commits) {
      elements.commits.textContent = `${this.stats.commits}+`;
    }
  }

  /**
   * Get current stats
   */
  getStats(): GitHubStats | null {
    return this.stats;
  }

  /**
   * Refresh stats (bypass cache)
   */
  async refresh(): Promise<void> {
    this.lastFetchTime = 0; // Invalidate cache
    await this.fetchStats();
    this.displayStats();
  }
}
