/**
 * Navigation Menu Component
 * Reusable navigation component for all pages
 */

class NavigationMenu {
    constructor() {
        this.init();
    }

    init() {
        this.createMenuHTML();
        this.bindEvents();
        this.setActiveMenu();
    }

    createMenuHTML() {
        const header = document.querySelector('.header');
        if (!header) return;

        header.innerHTML = `
            <div class="container">
                <a href="index.html" class="logo">
                    <span>🏢</span> Capella Residence
                </a>
                <button class="menu-toggle" aria-label="Toggle menu">
                    <span>☰</span>
                </button>
                <nav class="nav">
                    <ul class="nav-menu">
                        <li><a href="index.html" data-page="home">Home</a></li>
                        <li><a href="about.html" data-page="about">About Us</a></li>
                        <li><a href="units.html" data-page="units">Floor Plans</a></li>
                        <li><a href="pricing.html" data-page="pricing">Pricing</a></li>
                        <li><a href="contact.html" data-page="contact">Contact</a></li>
                    </ul>
                </nav>
            </div>
        `;
    }

    bindEvents() {
        // Mobile menu toggle
        const menuToggle = document.querySelector('.menu-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (menuToggle && navMenu) {
            menuToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
                
                // Update aria-expanded for accessibility
                const isExpanded = navMenu.classList.contains('active');
                menuToggle.setAttribute('aria-expanded', isExpanded);
            });
        }

        // Close mobile menu when clicking on a link
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            });
        });

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.header')) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });

        // Handle window resize
        window.addEventListener('resize', () => {
            if (window.innerWidth > 768) {
                navMenu.classList.remove('active');
                menuToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    setActiveMenu() {
        const currentPage = this.getCurrentPage();
        const navLinks = document.querySelectorAll('.nav-menu a');
        
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === currentPage) {
                link.classList.add('active');
            }
        });
    }

    getCurrentPage() {
        const path = window.location.pathname;
        const filename = path.split('/').pop() || 'index.html';
        
        // Map filenames to page identifiers
        const pageMap = {
            'index.html': 'home',
            'about.html': 'about',
            'units.html': 'units',
            'pricing.html': 'pricing',
            'contact.html': 'contact'
        };

        return pageMap[filename] || 'home';
    }

    // Method to update active menu programmatically
    updateActiveMenu(pageName) {
        const navLinks = document.querySelectorAll('.nav-menu a');
        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === pageName) {
                link.classList.add('active');
            }
        });
    }
}

// Utility function to initialize navigation on any page
function initNavigation() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            new NavigationMenu();
        });
    } else {
        new NavigationMenu();
    }
}

// Auto-initialize if this script is loaded
initNavigation();

// Export for use in modules (if needed)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = NavigationMenu;
}