// ============================================
// Header Scroll Behavior & Mobile Menu
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const header = document.getElementById('header');
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    const closeMenu = document.getElementById('closeMenu');
    const headerLogo = document.querySelector('.header-logo');

    // Logo click to refresh page
    if (headerLogo) {
        headerLogo.style.cursor = 'pointer';
        headerLogo.setAttribute('title', 'Click to refresh page');
        headerLogo.addEventListener('click', function(e) {
            e.preventDefault();
            // Force refresh with cache bypass
            const currentPath = window.location.pathname;
            const isIndex = currentPath === '/' || currentPath === '/index.html' || currentPath.endsWith('/');
            
            if (isIndex) {
                // For index page, go to index.html with refresh param
                window.location.href = 'index.html?refresh=' + Date.now();
            } else {
                // For other pages, refresh current page with cache bypass
                window.location.href = currentPath + (currentPath.includes('?') ? '&' : '?') + 'refresh=' + Date.now();
            }
        });
    }

    // Header scroll behavior
    function handleScroll() {
        if (window.scrollY > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    }

    // Initial check
    handleScroll();

    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);

    // Mobile menu toggle
    if (menuToggle && mobileMenu) {
        menuToggle.addEventListener('click', function() {
            mobileMenu.classList.add('active');
            menuToggle.classList.add('active');
            document.body.style.overflow = 'hidden';
        });
    }

    // Close mobile menu
    if (closeMenu && mobileMenu) {
        closeMenu.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    }

    // Close menu when clicking on a link
    const mobileMenuLinks = document.querySelectorAll('.mobile-menu a');
    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        });
    });

    // Close menu when clicking outside
    mobileMenu.addEventListener('click', function(e) {
        if (e.target === mobileMenu) {
            mobileMenu.classList.remove('active');
            menuToggle.classList.remove('active');
            document.body.style.overflow = '';
        }
    });
});




