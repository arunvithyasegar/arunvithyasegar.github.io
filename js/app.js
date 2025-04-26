// Basic security measures
document.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    return false;
});

// Disable keyboard shortcuts for developer tools
document.addEventListener('keydown', (e) => {
    // Prevent F12 key
    if (e.key === 'F12' || e.keyCode === 123) {
        e.preventDefault();
        return false;
    }
    
    // Prevent Ctrl+Shift+I (Inspect Element)
    if (e.ctrlKey && e.shiftKey && (e.key === 'I' || e.key === 'i')) {
        e.preventDefault();
        return false;
    }
    
    // Prevent Ctrl+Shift+J (Console)
    if (e.ctrlKey && e.shiftKey && (e.key === 'J' || e.key === 'j')) {
        e.preventDefault();
        return false;
    }
    
    // Prevent Ctrl+U (View Source)
    if (e.ctrlKey && (e.key === 'U' || e.key === 'u')) {
        e.preventDefault();
        return false;
    }
});

// Disable text selection
document.addEventListener('selectstart', (e) => {
    e.preventDefault();
    return false;
});

// Disable copy
document.addEventListener('copy', (e) => {
    e.preventDefault();
    return false;
});

// Disable cut
document.addEventListener('cut', (e) => {
    e.preventDefault();
    return false;
});

// Disable paste
document.addEventListener('paste', (e) => {
    e.preventDefault();
    return false;
});

// Core website functionality
document.addEventListener('DOMContentLoaded', () => {
    // Show loading state
    const loading = document.createElement('div');
    loading.className = 'loading';
    loading.innerHTML = '<div class="loading-spinner"></div>';
    document.body.appendChild(loading);

    // Initialize components after a short delay to ensure smooth loading
    setTimeout(() => {
        // Initialize particles with optimized performance
        createParticles();
        
        // Initialize age counter
        updateAge();
        
        // Initialize GitHub stats
        updateGitHubStats();
        
        // Handle navigation
        initNavigation();

        // Initialize custom cursor
        initCustomCursor();

        // Hide loading state
        loading.classList.add('hidden');
        setTimeout(() => loading.remove(), 300);
    }, 100);
});

// Create particle background with optimized performance
function createParticles() {
    const container = document.getElementById('particles');
    if (!container) return;
    
    // Adjust particle count based on screen size and performance
    const particleCount = Math.min(Math.floor(window.innerWidth / 15), 100);
    
    // Use DocumentFragment for better performance
    const fragment = document.createDocumentFragment();
    
    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 3 + 1; // Smaller particles for better performance
        const posX = Math.random() * window.innerWidth;
        const posY = Math.random() * window.innerHeight;
        const duration = Math.random() * 15 + 15; // Slower animation for smoother effect
        const delay = Math.random() * 5;
        
        particle.style.cssText = `
            width: ${size}px;
            height: ${size}px;
            left: ${posX}px;
            top: ${posY}px;
            animation: float ${duration}s ease-in-out ${delay}s infinite;
        `;
        
        fragment.appendChild(particle);
    }
    
    container.appendChild(fragment);
}

// Update age display with smoother animation
function updateAge() {
    const birthday = new Date(1999, 7, 6, 1, 24, 0);
    const ageElement = document.getElementById('current-age');
    if (!ageElement) return;
    
    function calculateAge() {
        const now = new Date();
        const ageInMilliseconds = now - birthday;
        const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
        ageElement.textContent = ageInYears.toFixed(12);
    }
    
    // Use requestAnimationFrame for smoother updates
    function update() {
        calculateAge();
        requestAnimationFrame(update);
    }
    
    update();
}

// Update GitHub stats
function updateGitHubStats() {
    const stats = { repos: 12, stars: 24, forks: 8, commits: 150 };
    ['repos', 'stars', 'forks'].forEach(stat => {
        const element = document.getElementById(`github-${stat}`);
        if (element) element.textContent = stats[stat];
    });
    
    const commitsElement = document.getElementById('github-commits');
    if (commitsElement) commitsElement.textContent = stats.commits + '+';
}

// Optimize counter animations
function animateCounters() {
    const counters = document.querySelectorAll('.counter');
    const speed = 200;
    
    counters.forEach(counter => {
        const target = counter.textContent === '150+' ? 150 : +counter.textContent;
        const increment = target / speed;
        let current = 0;
        
        function updateCount() {
            current += increment;
            if (current < target) {
                counter.textContent = Math.floor(current);
                requestAnimationFrame(updateCount);
            } else {
                counter.textContent = target + (counter.id === 'github-commits' ? '+' : '');
            }
        }
        
        requestAnimationFrame(updateCount);
    });
}

// Initialize navigation with smooth transitions
function initNavigation() {
    const navLinks = document.querySelectorAll('.nav-link');
    const homePage = document.getElementById('home-page');
    const appContainer = document.getElementById('app-container');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Add loading state
            const loading = document.createElement('div');
            loading.className = 'loading';
            loading.innerHTML = '<div class="loading-spinner"></div>';
            document.body.appendChild(loading);
            
            // Hide home page if visible
            if (homePage && homePage.style.display !== 'none') {
                homePage.style.opacity = '0';
                homePage.addEventListener('transitionend', function handleTransition() {
                    homePage.style.display = 'none';
                    if (appContainer) {
                        appContainer.classList.remove('hidden');
                        requestAnimationFrame(() => {
                            appContainer.style.opacity = '1';
                        });
                    }
                    homePage.removeEventListener('transitionend', handleTransition);
                });
            }
            
            // Get target page
            const targetPage = this.dataset.page;
            
            // Update active states
            navLinks.forEach(el => el.classList.remove('active'));
            document.querySelectorAll('.page').forEach(el => {
                el.classList.remove('active');
                el.style.opacity = '0';
            });
            
            // Activate clicked link
            this.classList.add('active');
            
            // Show target page with smooth transition
            const pageToShow = document.getElementById(`${targetPage}-page`);
            if (pageToShow) {
                pageToShow.classList.add('active');
                requestAnimationFrame(() => {
                    pageToShow.style.opacity = '1';
                    
                    // Handle special pages
                    if (targetPage === 'resume') {
                        document.querySelectorAll('.progress-bar').forEach(bar => {
                            if (!bar.classList.contains('animate-progress')) {
                                bar.classList.add('animate-progress');
                            }
                        });
                    } else if (targetPage === 'stats') {
                        setTimeout(animateCounters, 500);
                    }
                    
                    // Hide loading state
                    loading.classList.add('hidden');
                    setTimeout(() => loading.remove(), 300);
                });
            }
        });
    });
    
    // Handle form submission
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            try {
                console.log('Form submitted:', data);
                alert('Thank you for your message! I will get back to you soon.');
                form.reset();
            } catch (error) {
                alert('An error occurred while sending your message. Please try again.');
            }
        });
    }
    
    // Set about page as default when home page is hidden
    if (homePage) {
        homePage.addEventListener('transitionend', function() {
            if (this.style.opacity === '0') {
                const aboutPage = document.getElementById('about-page');
                const aboutLink = document.querySelector('[data-page="about"]');
                if (aboutPage) {
                    aboutPage.classList.add('active');
                    aboutPage.style.opacity = '1';
                }
                if (aboutLink) {
                    aboutLink.classList.add('active');
                }
            }
        });
    }
}

// Initialize custom cursor
function initCustomCursor() {
    const cursor = document.createElement('div');
    cursor.id = 'cursor';
    const circle = document.createElement('div');
    circle.id = 'circle';
    cursor.appendChild(circle);
    document.body.appendChild(cursor);

    // Select all interactive elements
    const interactiveElements = document.querySelectorAll('a, button, .project-card, .nav-link, .skill-tag');
    
    // Handle mouse over/out event on interactive elements
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', handleMouseEnter);
        element.addEventListener('mouseleave', handleMouseLeave);
    });
    
    window.addEventListener('mousemove', handleMouseMove);

    // Move the cursor in dom/window
    function handleMouseMove(event) {
        const top = event.pageY - (cursor.clientHeight / 2);
        const left = event.pageX - (cursor.clientWidth / 2);
        cursor.style.top = top + 'px';
        cursor.style.left = left + 'px';
    }

    // event: mouse enter on interactive element
    function handleMouseEnter() {
        cursor.classList.add('hovered');
    }

    // event: mouse leave on interactive element
    function handleMouseLeave() {
        cursor.classList.remove('hovered');
    }
}