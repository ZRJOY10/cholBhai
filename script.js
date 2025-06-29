// DOM Elements
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('.nav-menu');
const cookieNotice = document.getElementById('cookieNotice');
const loader = document.getElementById('loader');

// Mobile Navigation Toggle
navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
    navToggle.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
    });
});

// Cookie Notice Functions
function acceptCookies() {
    cookieNotice.style.opacity = '0';
    cookieNotice.style.transform = 'translateY(100%)';
    setTimeout(() => {
        cookieNotice.style.display = 'none';
    }, 300);
    localStorage.setItem('cookiesAccepted', 'true');
}

// Check if cookies were already accepted
if (localStorage.getItem('cookiesAccepted') === 'true') {
    cookieNotice.style.display = 'none';
}

// Newsletter Form
const newsletterForm = document.querySelector('.newsletter-form');
newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    
    // Show success message
    const button = e.target.querySelector('button');
    const originalText = button.textContent;
    button.textContent = 'Subscribed!';
    button.style.background = '#10b981';
    
    setTimeout(() => {
        button.textContent = originalText;
        button.style.background = '';
        e.target.reset();
    }, 2000);
});

// Smooth Scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Scroll Animation
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('fade-in');
        }
    });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.vehicle-card, .blog-card, .section-title').forEach(el => {
    observer.observe(el);
});

// Header scroll effect
let lastScrollTop = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (scrollTop > lastScrollTop && scrollTop > 100) {
        // Scrolling down
        header.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        header.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Loading Animation
window.addEventListener('load', () => {
    setTimeout(() => {
        loader.classList.remove('active');
    }, 500);
});

// Show loader on page transitions
document.querySelectorAll('a[href]').forEach(link => {
    link.addEventListener('click', (e) => {
        const href = link.getAttribute('href');
        if (href.startsWith('http') || href.includes('.html')) {
            loader.classList.add('active');
        }
    });
});

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const heroImage = document.querySelector('.hero-image');
    if (heroImage) {
        heroImage.style.transform = `translateY(${scrolled * 0.5}px)`;
    }
});

// Card hover effects
document.querySelectorAll('.vehicle-card, .blog-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-10px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Button click effects
document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', function(e) {
        // Create ripple effect
        const ripple = document.createElement('span');
        const rect = this.getBoundingClientRect();
        const size = Math.max(rect.width, rect.height);
        const x = e.clientX - rect.left - size / 2;
        const y = e.clientY - rect.top - size / 2;
        
        ripple.style.width = ripple.style.height = size + 'px';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.classList.add('ripple');
        
        this.appendChild(ripple);
        
        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple CSS
const rippleCSS = `
.btn {
    position: relative;
    overflow: hidden;
}

.ripple {
    position: absolute;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.6);
    transform: scale(0);
    animation: ripple-animation 0.6s linear;
    pointer-events: none;
}

@keyframes ripple-animation {
    to {
        transform: scale(4);
        opacity: 0;
    }
}
`;

// Inject ripple CSS
const style = document.createElement('style');
style.textContent = rippleCSS;
document.head.appendChild(style);

// Auto-hide cookie notice after 10 seconds if not interacted with
setTimeout(() => {
    if (cookieNotice.style.display !== 'none') {
        cookieNotice.style.opacity = '0.7';
    }
}, 10000);

// Vehicle card click events (for demonstration)
document.querySelectorAll('.vehicle-card').forEach(card => {
    card.addEventListener('click', function() {
        const vehicleType = this.querySelector('h3').textContent;
        alert(`You selected: ${vehicleType}\nThis would typically open a booking interface.`);
    });
});

// Blog card click tracking
document.querySelectorAll('.blog-card').forEach(card => {
    card.addEventListener('click', function() {
        const blogTitle = this.querySelector('h3 a').textContent;
        console.log(`Blog clicked: ${blogTitle}`);
    });
});

// Social media link handling
document.querySelectorAll('.social-links a').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();
        const platform = this.querySelector('i').className.split('fa-')[1];
        console.log(`Social media clicked: ${platform}`);
        // In a real app, this would open the actual social media pages
    });
});

// App download button handling
document.querySelectorAll('.app-btn').forEach(button => {
    button.addEventListener('click', function(e) {
        e.preventDefault();
        const appType = this.querySelector('strong').textContent;
        alert(`Downloading ${appType}...\nThis would typically start the app download.`);
    });
});

// Keyboard navigation
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        // Close mobile menu
        navMenu.classList.remove('active');
        navToggle.classList.remove('active');
        
        // Hide cookie notice
        if (cookieNotice.style.display !== 'none') {
            acceptCookies();
        }
    }
});

// Performance optimization: Debounce scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debouncing to scroll events
const debouncedScrollHandler = debounce(() => {
    // Scroll-based animations can be added here
}, 10);

window.addEventListener('scroll', debouncedScrollHandler);

// Initialize page
document.addEventListener('DOMContentLoaded', function() {
    // Add initial animations
    setTimeout(() => {
        document.querySelector('.hero-content').classList.add('slide-in-left');
        document.querySelector('.hero-image').classList.add('slide-in-right');
    }, 200);
    
    // Preload images for better performance
    const imageUrls = [
        'https://via.placeholder.com/600x400/E5E7EB/6B7280?text=Ride+Sharing+App',
        'https://via.placeholder.com/300x200/E5E7EB/6B7280?text=City+Guide',
        'https://via.placeholder.com/300x200/E5E7EB/6B7280?text=Vehicle+Choice',
        'https://via.placeholder.com/300x200/E5E7EB/6B7280?text=Safe+Rides'
    ];
    
    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
});

console.log('OvoRide website loaded successfully!');
