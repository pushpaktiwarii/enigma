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

    // Header scroll behavior with hide on scroll down
    let lastScrollTop = 0;
    let scrollThreshold = 100; // Minimum scroll distance before hiding
    
    function handleScroll() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Add scrolled class for styling
        if (scrollTop > 50) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
            header.classList.remove('header-hidden');
            return; // Always show header at top
        }
        
        // Hide/show based on scroll direction
        if (scrollTop > scrollThreshold) {
            if (scrollTop > lastScrollTop) {
                // Scrolling down - hide header
                header.classList.add('header-hidden');
            } else {
                // Scrolling up - show header
                header.classList.remove('header-hidden');
            }
        } else {
            // Near top - always show
            header.classList.remove('header-hidden');
        }
        
        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // For Mobile or negative scrolling
    }

    // Initial check
    handleScroll();

    // Listen for scroll events with throttling
    let ticking = false;
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(function() {
                handleScroll();
                ticking = false;
            });
            ticking = true;
        }
    });

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
    if (mobileMenu) {
        mobileMenu.addEventListener('click', function(e) {
            if (e.target === mobileMenu) {
                mobileMenu.classList.remove('active');
                if (menuToggle) {
                    menuToggle.classList.remove('active');
                }
                document.body.style.overflow = '';
            }
        });
    }
});




