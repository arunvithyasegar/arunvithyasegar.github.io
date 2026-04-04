/**
 * Enhanced Portfolio Features
 * Additional interactive features for the portfolio website
 */

// ============================================
// PAGE LOADER
// ============================================
window.addEventListener('load', () => {
    const loader = document.querySelector('.page-loader');
    if (loader) {
        setTimeout(() => {
            loader.classList.add('hidden');
        }, 500);
    }
});

// ============================================
// SCROLL TO TOP BUTTON
// ============================================
function initScrollToTop() {
    const scrollBtn = document.getElementById('scroll-to-top');
    if (!scrollBtn) return;

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollBtn.classList.add('visible');
        } else {
            scrollBtn.classList.remove('visible');
        }
    });

    scrollBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// ============================================
// READING PROGRESS BAR
// ============================================
function initReadingProgress() {
    const progressBar = document.getElementById('reading-progress');
    if (!progressBar) return;

    window.addEventListener('scroll', () => {
        const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (window.scrollY / windowHeight) * 100;
        progressBar.style.width = `${scrolled}%`;
    });
}

// ============================================
// TOAST NOTIFICATIONS
// ============================================
function showToast(message, type = 'success') {
    // Remove existing toast if any
    const existingToast = document.querySelector('.toast');
    if (existingToast) {
        existingToast.remove();
    }

    // Create toast element
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;

    const icon = type === 'success' ? 'fa-check-circle' : 'fa-exclamation-circle';

    toast.innerHTML = `
    <i class="fas ${icon} toast-icon"></i>
    <span>${message}</span>
  `;

    document.body.appendChild(toast);

    // Show toast
    setTimeout(() => {
        toast.classList.add('show');
    }, 10);

    // Hide and remove toast
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => {
            toast.remove();
        }, 300);
    }, 3000);
}

// ============================================
// COPY EMAIL FUNCTIONALITY
// ============================================
async function copyEmail(email = 'hi@arunvithyasegar.com') {
    try {
        await navigator.clipboard.writeText(email);
        showToast('Email copied to clipboard!', 'success');
    } catch (err) {
        console.error('Failed to copy email:', err);
        showToast('Failed to copy email. Please try again.', 'error');
    }
}

// Add copy buttons to email links
function initCopyEmailButtons() {
    const emailLinks = document.querySelectorAll('a[href^="mailto:"]');

    emailLinks.forEach(link => {
        // Skip if already has a copy button
        if (link.nextElementSibling?.classList.contains('copy-email-btn')) return;

        const email = link.href.replace('mailto:', '');
        const copyBtn = document.createElement('button');
        copyBtn.className = 'copy-email-btn ml-2';
        copyBtn.innerHTML = '<i class="fas fa-copy"></i> Copy';
        copyBtn.onclick = (e) => {
            e.preventDefault();
            copyEmail(email);
        };

        link.parentNode.insertBefore(copyBtn, link.nextSibling);
    });
}

// ============================================
// PROJECT FILTERING
// ============================================
function initProjectFiltering() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    if (filterButtons.length === 0 || projectCards.length === 0) return;

    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.dataset.filter;

            // Update active button
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Filter projects
            projectCards.forEach(card => {
                const tags = Array.from(card.querySelectorAll('.skill-tag')).map(tag => tag.textContent.toLowerCase());

                if (filter === 'all' || tags.includes(filter.toLowerCase())) {
                    card.style.display = 'block';
                    card.style.animation = 'fadeInUp 0.6s ease-out';
                } else {
                    card.style.display = 'none';
                }
            });
        });
    });
}

// ============================================
// DYNAMIC GITHUB STATS (Optional - requires API)
// ============================================
async function fetchGitHubStats(username = 'arunv8055') {
    try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        const data = await response.json();

        // Update stats
        const reposElement = document.getElementById('github-repos');
        const followersElement = document.getElementById('github-followers');

        if (reposElement) reposElement.textContent = data.public_repos;
        if (followersElement) followersElement.textContent = data.followers;

        // Fetch repository stats
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        const repos = await reposResponse.json();

        const totalStars = repos.reduce((sum, repo) => sum + repo.stargazers_count, 0);
        const totalForks = repos.reduce((sum, repo) => sum + repo.forks_count, 0);

        const starsElement = document.getElementById('github-stars');
        const forksElement = document.getElementById('github-forks');

        if (starsElement) starsElement.textContent = totalStars;
        if (forksElement) forksElement.textContent = totalForks;

    } catch (error) {
        console.error('Failed to fetch GitHub stats:', error);
    }
}

// ============================================
// DOWNLOAD RESUME
// ============================================
function downloadResume() {
    // This would link to your actual resume PDF
    const link = document.createElement('a');
    link.href = '/path/to/resume.pdf'; // Update with actual path
    link.download = 'Arun_V_Resume.pdf';
    link.click();

    showToast('Resume download started!', 'success');
}

// ============================================
// KEYBOARD NAVIGATION
// ============================================
function initKeyboardNavigation() {
    document.addEventListener('keydown', (e) => {
        // Press 'Escape' to return to home
        if (e.key === 'Escape') {
            const homeLink = document.querySelector('[data-page="home"]');
            if (homeLink) homeLink.click();
        }

        // Press '/' to focus search (if implemented)
        if (e.key === '/' && !e.ctrlKey && !e.metaKey) {
            e.preventDefault();
            const searchInput = document.getElementById('search-input');
            if (searchInput) searchInput.focus();
        }
    });
}

// ============================================
// LAZY LOADING IMAGES
// ============================================
function initLazyLoading() {
    const images = document.querySelectorAll('img[data-src]');

    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
}

// ============================================
// PERFORMANCE MONITORING
// ============================================
function logPerformanceMetrics() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                console.log('Performance Metrics:');
                console.log(`DOM Content Loaded: ${perfData.domContentLoadedEventEnd - perfData.domContentLoadedEventStart}ms`);
                console.log(`Page Load Time: ${perfData.loadEventEnd - perfData.loadEventStart}ms`);
                console.log(`Total Page Load: ${perfData.loadEventEnd - perfData.fetchStart}ms`);
            }, 0);
        });
    }
}

// ============================================
// ANALYTICS TRACKING (Placeholder)
// ============================================
function trackPageView(pageName) {
    // Integrate with Google Analytics or other analytics service
    if (typeof gtag !== 'undefined') {
        gtag('event', 'page_view', {
            page_title: pageName,
            page_location: window.location.href,
            page_path: window.location.pathname
        });
    }
    console.log(`Page view tracked: ${pageName}`);
}

// ============================================
// ENHANCED NAVIGATION TRACKING
// ============================================
function initNavigationTracking() {
    const navLinks = document.querySelectorAll('.nav-link');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            const pageName = link.dataset.page || 'unknown';
            trackPageView(pageName);
        });
    });
}

// ============================================
// SMOOTH SCROLL FOR ANCHOR LINKS
// ============================================
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
}

// ============================================
// STAGGER ANIMATION ON SCROLL
// ============================================
function initScrollAnimations() {
    const animatedElements = document.querySelectorAll('.stagger-animation');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    animatedElements.forEach(el => observer.observe(el));
}

// ============================================
// INITIALIZE ALL FEATURES
// ============================================
function initEnhancements() {
    // Core features
    initScrollToTop();
    initReadingProgress();
    initCopyEmailButtons();
    initProjectFiltering();
    initKeyboardNavigation();
    initLazyLoading();
    initSmoothScroll();
    initScrollAnimations();
    initNavigationTracking();

    // Optional features (uncomment to enable)
    // fetchGitHubStats();
    // logPerformanceMetrics();

    console.log('✨ Portfolio enhancements initialized');
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initEnhancements);
} else {
    initEnhancements();
}

// Export functions for global use
window.portfolioEnhancements = {
    copyEmail,
    showToast,
    downloadResume,
    fetchGitHubStats,
    trackPageView
};
