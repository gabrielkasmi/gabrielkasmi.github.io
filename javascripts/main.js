// Main JavaScript for enhanced functionality

document.addEventListener('DOMContentLoaded', function() {
    
    // Back to top button functionality
    const backToTopButton = document.querySelector('.back-to-top');
    
    if (backToTopButton) {
        window.addEventListener('scroll', function() {
            if (window.pageYOffset > 300) {
                backToTopButton.classList.add('visible');
            } else {
                backToTopButton.classList.remove('visible');
            }
        });
        
        backToTopButton.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }
    
    // Lazy loading for images
    const images = document.querySelectorAll('img[loading="lazy"]');
    
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    img.src = img.dataset.src || img.src;
                    img.classList.add('loaded');
                    imageObserver.unobserve(img);
                }
            });
        });
        
        images.forEach(img => imageObserver.observe(img));
    } else {
        // Fallback for browsers without IntersectionObserver
        images.forEach(img => {
            img.src = img.dataset.src || img.src;
            img.classList.add('loaded');
        });
    }
    
    // Collapsible publication sections
    const publicationYears = document.querySelectorAll('.publication-year');
    
    publicationYears.forEach(year => {
        year.addEventListener('click', function() {
            const content = this.nextElementSibling;
            const isCollapsed = this.classList.contains('collapsed');
            
            if (isCollapsed) {
                this.classList.remove('collapsed');
                content.classList.remove('collapsed');
            } else {
                this.classList.add('collapsed');
                content.classList.add('collapsed');
            }
        });
    });
    
    // Smooth scrolling for anchor links
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    anchorLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('header').offsetHeight;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Active navigation highlighting
    const navLinks = document.querySelectorAll('nav a');
    const sections = document.querySelectorAll('section h2[id], section h3[id]');
    
    function updateActiveNav() {
        const scrollPosition = window.scrollY + 100;
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            const sectionId = section.getAttribute('id');
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href') === '#' + sectionId) {
                        link.classList.add('active');
                    }
                });
            }
        });
    }
    
    window.addEventListener('scroll', updateActiveNav);
    
    // Mobile menu toggle (for responsive design)
    const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
    const nav = document.querySelector('nav');
    
    if (mobileMenuToggle && nav) {
        mobileMenuToggle.addEventListener('click', function() {
            nav.classList.toggle('mobile-open');
            this.classList.toggle('active');
        });
    }
    
    // Auto-hide mobile menu when clicking outside
    document.addEventListener('click', function(e) {
        if (nav && nav.classList.contains('mobile-open')) {
            if (!nav.contains(e.target) && !mobileMenuToggle.contains(e.target)) {
                nav.classList.remove('mobile-open');
                mobileMenuToggle.classList.remove('active');
            }
        }
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // Escape key to close mobile menu and dropdowns
        if (e.key === 'Escape') {
            if (nav && nav.classList.contains('mobile-open')) {
                nav.classList.remove('mobile-open');
                mobileMenuToggle.classList.remove('active');
            }
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
        
        // Home key to scroll to top
        if (e.key === 'Home') {
            e.preventDefault();
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
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
    const debouncedUpdateActiveNav = debounce(updateActiveNav, 10);
    window.removeEventListener('scroll', updateActiveNav);
    window.addEventListener('scroll', debouncedUpdateActiveNav);
    
    // Initialize tooltips for external links
    const externalLinks = document.querySelectorAll('a[href^="http"]');
    externalLinks.forEach(link => {
        if (!link.title) {
            link.title = 'Opens in new tab';
        }
        link.setAttribute('target', '_blank');
        link.setAttribute('rel', 'noopener noreferrer');
    });
    
    // Add loading states for better UX
    const links = document.querySelectorAll('a:not([href^="#"])');
    links.forEach(link => {
        link.addEventListener('click', function() {
            if (this.href && !this.href.startsWith('javascript:') && !this.href.startsWith('#')) {
                this.style.opacity = '0.7';
                this.style.pointerEvents = 'none';
                
                setTimeout(() => {
                    this.style.opacity = '';
                    this.style.pointerEvents = '';
                }, 1000);
            }
        });
    });
    
    // Dropdown functionality for all devices
    const dropdowns = document.querySelectorAll('.nav-dropdown');
    console.log('Found dropdowns:', dropdowns.length);
    
    dropdowns.forEach(dropdown => {
        const dropdownLink = dropdown.querySelector('a');
        console.log('Setting up dropdown for:', dropdownLink.textContent);
        
        // Use both click and mousedown for better cross-browser compatibility
        const handleDropdownToggle = function(e) {
            console.log('Dropdown clicked:', this.textContent);
            e.preventDefault();
            e.stopPropagation();
            dropdown.classList.toggle('active');
            console.log('Dropdown active:', dropdown.classList.contains('active'));
            
            // Close other dropdowns
            dropdowns.forEach(otherDropdown => {
                if (otherDropdown !== dropdown) {
                    otherDropdown.classList.remove('active');
                }
            });
        };
        
        dropdownLink.addEventListener('click', handleDropdownToggle);
        dropdownLink.addEventListener('mousedown', handleDropdownToggle);
    });
    
    // Console welcome message
    console.log('%c👋 Welcome to Gabriel Kasmi\'s website!', 'color: #667eea; font-size: 16px; font-weight: bold;');
    console.log('%cBuilt with modern web technologies for the best user experience.', 'color: #764ba2; font-size: 12px;');
    
    // Close dropdowns when clicking outside
    document.addEventListener('click', function(e) {
        // Fallback for browsers that don't support closest()
        const isInsideDropdown = e.target.closest ? e.target.closest('.nav-dropdown') : 
            (e.target.parentElement && e.target.parentElement.closest('.nav-dropdown'));
            
        if (!isInsideDropdown) {
            dropdowns.forEach(dropdown => {
                dropdown.classList.remove('active');
            });
        }
    });
    

    
    // Tab switching logic for Welcome/Bienvenue
    window.switchTab = function(tabGroup, lang) {
        const tabButtons = document.querySelectorAll('.tab-buttons .tab-button');
        const tabContents = document.querySelectorAll('.tab-content');
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        document.querySelector(`.tab-button[onclick*="${lang}"]`).classList.add('active');
        document.getElementById(`${tabGroup}-${lang}`).classList.add('active');
    };
}); 