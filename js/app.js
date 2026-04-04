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

// Theme Management
function initTheme() {
    const themeToggle = document.querySelector('.theme-toggle');
    const sunIcon = themeToggle.querySelector('.sun-icon');
    const moonIcon = themeToggle.querySelector('.moon-icon');
    
    // Get saved theme preference or use system preference
    const savedTheme = localStorage.getItem('theme');
    const systemPrefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const initialTheme = savedTheme || (systemPrefersDark ? 'dark' : 'light');
    
    // Set initial theme
    document.documentElement.setAttribute('data-theme', initialTheme);
    updateThemeIcons(initialTheme);
    
    // Listen for system theme changes
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
        if (!localStorage.getItem('theme')) {
            const newTheme = e.matches ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            updateThemeIcons(newTheme);
        }
    });
    
    // Handle theme toggle click
    themeToggle.addEventListener('click', () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        document.documentElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        updateThemeIcons(newTheme);
    });
    
    function updateThemeIcons(theme) {
        if (theme === 'dark') {
            sunIcon.style.display = 'none';
            moonIcon.style.display = 'block';
        } else {
            sunIcon.style.display = 'block';
            moonIcon.style.display = 'none';
        }
    }
}

// Core website functionality
document.addEventListener('DOMContentLoaded', () => {
    // Initialize theme
    initTheme();
    
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

// Teenage Engineering inspired animations
function createGlitchEffect(element) {
  const glitch = document.createElement('div');
  glitch.className = 'glitch';
  glitch.style.cssText = `
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(90deg, transparent 0%, var(--accent-color) 50%, transparent 100%);
    opacity: 0;
    pointer-events: none;
    z-index: 100;
  `;
  element.appendChild(glitch);
  
  return glitch;
}

function addGlitchEffect(element) {
  const glitch = createGlitchEffect(element);
  
  element.addEventListener('mouseenter', () => {
    glitch.style.opacity = '0.2';
    glitch.style.animation = 'glitch 0.3s linear infinite';
  });
  
  element.addEventListener('mouseleave', () => {
    glitch.style.opacity = '0';
    glitch.style.animation = 'none';
  });
}

// Teenage Engineering inspired particle system
function createParticles() {
  const container = document.createElement('div');
  container.className = 'particles-container';
  container.style.cssText = `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    z-index: -1;
  `;
  document.body.appendChild(container);
  
  const particleCount = 50;
  for (let i = 0; i < particleCount; i++) {
    const particle = document.createElement('div');
    particle.className = 'particle';
    particle.style.cssText = `
      position: absolute;
      width: ${Math.random() * 3 + 1}px;
      height: ${Math.random() * 3 + 1}px;
      background-color: var(--text-secondary);
      border-radius: 50%;
      left: ${Math.random() * 100}%;
      top: ${Math.random() * 100}%;
      animation: float ${Math.random() * 10 + 10}s linear infinite;
      opacity: ${Math.random() * 0.5 + 0.2};
    `;
    container.appendChild(particle);
  }
}

// Teenage Engineering inspired cursor
function createCustomCursor() {
  const cursor = document.createElement('div');
  cursor.className = 'custom-cursor';
  cursor.style.cssText = `
    position: fixed;
    width: 20px;
    height: 20px;
    border: 1px solid var(--border-color);
    border-radius: 50%;
    pointer-events: none;
    z-index: 9999;
    transition: transform 0.1s ease;
  `;
  document.body.appendChild(cursor);
  
  const cursorDot = document.createElement('div');
  cursorDot.className = 'cursor-dot';
  cursorDot.style.cssText = `
    position: absolute;
    width: 4px;
    height: 4px;
    background-color: var(--accent-color);
    border-radius: 50%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  `;
  cursor.appendChild(cursorDot);
  
  document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.clientX + 'px';
    cursor.style.top = e.clientY + 'px';
  });
  
  document.addEventListener('mousedown', () => {
    cursor.style.transform = 'scale(0.8)';
  });
  
  document.addEventListener('mouseup', () => {
    cursor.style.transform = 'scale(1)';
  });
}

// Teenage Engineering inspired typing effect
function typeWriter(element, text, speed = 50) {
  let i = 0;
  element.textContent = '';
  
  function type() {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Initialize all Teenage Engineering inspired effects
document.addEventListener('DOMContentLoaded', () => {
  // Add glitch effects to interactive elements
  document.querySelectorAll('.nav-link, .social-icon, button').forEach(addGlitchEffect);
  
  // Create particle background
  createParticles();
  
  // Create custom cursor
  createCustomCursor();
  
  // Add typing effect to headings
  document.querySelectorAll('h1, h2').forEach((heading) => {
    const text = heading.textContent;
    typeWriter(heading, text);
  });
  
  // Add Teenage Engineering inspired hover effects
  document.querySelectorAll('a, button').forEach((element) => {
    element.addEventListener('mouseenter', () => {
      element.style.textShadow = `0 0 10px var(--accent-color)`;
    });
    
    element.addEventListener('mouseleave', () => {
      element.style.textShadow = 'none';
    });
  });
  
  // Add Teenage Engineering inspired scroll effects
  window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    document.documentElement.style.setProperty('--scroll', scrolled);
  });
});

// Update age display with smoother animation
function updateAge() {
    const birthday = new Date(1999, 7, 6, 1, 24, 0);
    const ageElement = document.getElementById('current-age');
    if (!ageElement) return;
    
    function calculateAge() {
        const now = new Date();
        const ageInMilliseconds = now - birthday;
        const ageInYears = ageInMilliseconds / (365.25 * 24 * 60 * 60 * 1000);
        return ageInYears;
    }
    
    // Format the age with 12 decimal places
    function formatAge(age) {
        return age.toFixed(12);
    }
    
    // Update the age display
    function update() {
        const age = calculateAge();
        ageElement.textContent = formatAge(age);
        requestAnimationFrame(update);
    }
    
    // Start the animation
    update();
    
    // Add smooth transition class
    ageElement.classList.add('counter');
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
    let currentPage = 'about'; // Default page
    
    // Function to show a page with smooth transition
    function showPage(pageId) {
        const pageToShow = document.getElementById(`${pageId}-page`);
        if (!pageToShow) return;
        
        // Add loading state
        const loading = document.createElement('div');
        loading.className = 'loading';
        loading.innerHTML = '<div class="loading-spinner"></div>';
        document.body.appendChild(loading);
        
        // Hide all pages
        document.querySelectorAll('.page').forEach(page => {
            if (page !== pageToShow) {
                page.classList.remove('active');
                page.style.opacity = '0';
            }
        });
        
        // Show the target page
        pageToShow.classList.add('active');
        requestAnimationFrame(() => {
            pageToShow.style.opacity = '1';
            
            // Handle special pages
            if (pageId === 'resume') {
                document.querySelectorAll('.progress-bar').forEach(bar => {
                    if (!bar.classList.contains('animate-progress')) {
                        bar.classList.add('animate-progress');
                    }
                });
            } else if (pageId === 'stats') {
                setTimeout(animateCounters, 500);
            }
            
            // Hide loading state
            loading.classList.add('hidden');
            setTimeout(() => loading.remove(), 300);
        });
    }
    
    // Function to update active states
    function updateActiveStates(pageId) {
        navLinks.forEach(link => {
            link.classList.toggle('active', link.dataset.page === pageId);
        });
    }
    
    // Handle navigation clicks
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetPage = this.dataset.page;
            if (targetPage === currentPage) return;
            
            currentPage = targetPage;
            updateActiveStates(targetPage);
            showPage(targetPage);
            
            // Update URL without page reload
            const newUrl = new URL(window.location);
            newUrl.pathname = `/${targetPage}`;
            window.history.pushState({ page: targetPage }, '', newUrl);
        });
    });
    
    // Handle browser back/forward
    window.addEventListener('popstate', (event) => {
        const page = event.state?.page || 'about';
        currentPage = page;
        updateActiveStates(page);
        showPage(page);
    });
    
    // Handle home page transition
    if (homePage) {
        homePage.addEventListener('transitionend', function() {
            if (this.style.opacity === '0') {
                this.style.display = 'none';
                if (appContainer) {
                    appContainer.classList.remove('hidden');
                    requestAnimationFrame(() => {
                        appContainer.style.opacity = '1';
                    });
                }
            }
        });
    }
    
    // Initialize first page
    const initialPage = window.location.pathname.slice(1) || 'about';
    currentPage = initialPage;
    updateActiveStates(initialPage);
    showPage(initialPage);
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