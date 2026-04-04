// Projects Page Specific JavaScript
document.addEventListener('DOMContentLoaded', () => {
    // Initialize project cards animations
    initializeProjectCards();
    // Initialize contribution items animations
    initializeContributions();
    // Add scroll reveal effects
    addScrollReveal();
});

function initializeProjectCards() {
    const projectCards = document.querySelectorAll('.project-card');
    
    projectCards.forEach(card => {
        // Add glitch effect on hover
        addGlitchEffect(card);
        
        // Add image hover effect
        const image = card.querySelector('.project-image img');
        if (image) {
            image.addEventListener('mouseenter', () => {
                image.style.transform = 'scale(1.1)';
            });
            
            image.addEventListener('mouseleave', () => {
                image.style.transform = 'scale(1)';
            });
        }
        
        // Add link hover effects
        const links = card.querySelectorAll('.project-link');
        links.forEach(link => {
            link.addEventListener('mouseenter', () => {
                link.style.transform = 'translateY(-2px)';
                link.style.boxShadow = '0 0 15px var(--accent-color)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.transform = 'translateY(0)';
                link.style.boxShadow = 'none';
            });
        });
    });
}

function initializeContributions() {
    const contributions = document.querySelectorAll('.contribution-item');
    
    contributions.forEach(item => {
        // Add glitch effect on hover
        addGlitchEffect(item);
        
        // Add link hover effect
        const link = item.querySelector('.contribution-link');
        if (link) {
            link.addEventListener('mouseenter', () => {
                link.style.textShadow = '0 0 10px var(--accent-color)';
            });
            
            link.addEventListener('mouseleave', () => {
                link.style.textShadow = 'none';
            });
        }
    });
}

function addScrollReveal() {
    const revealElements = document.querySelectorAll('.project-card, .contribution-item');
    
    const revealOnScroll = () => {
        revealElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    };
    
    // Set initial styles
    revealElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'all 0.6s var(--transition-timing)';
    });
    
    // Add scroll event listener
    window.addEventListener('scroll', revealOnScroll);
    // Initial check
    revealOnScroll();
}

// Glitch effect function
function addGlitchEffect(element) {
    element.addEventListener('mouseenter', () => {
        element.style.transform = 'translateY(-5px)';
        element.style.boxShadow = '0 0 15px var(--accent-color)';
        
        // Add glitch animation
        element.style.animation = 'project-glow 2s infinite';
    });
    
    element.addEventListener('mouseleave', () => {
        element.style.transform = 'translateY(0)';
        element.style.boxShadow = 'none';
        element.style.animation = 'none';
    });
} 