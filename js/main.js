// ============================================
// Main JavaScript - Initialization & Utilities
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Initialize all components
    console.log('ENIGMA XIII - Website Initialized');
    
    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            if (href !== '#' && href !== '') {
                e.preventDefault();
                const target = document.querySelector(href);
                if (target) {
                    const headerHeight = document.querySelector('.header').offsetHeight;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Video error handling
    const heroVideo = document.querySelector('.hero-video');
    const fallback = document.querySelector('.hero-fallback');
    
    if (heroVideo) {
        // Check if video can load
        heroVideo.addEventListener('loadeddata', function() {
            console.log('Video loaded successfully');
            // Ensure fallback is hidden
            if (fallback) {
                fallback.classList.remove('show-fallback');
            }
        });
        
        // Handle video load error
        heroVideo.addEventListener('error', function(e) {
            console.log('Video failed to load, showing fallback image');
            if (fallback) {
                fallback.classList.add('show-fallback');
            }
        });
        
        // Try to play video
        heroVideo.play().catch(function(error) {
            console.log('Video autoplay failed (this is normal on some browsers):', error);
            // Don't show fallback just because autoplay failed
            // Video will still be visible, just not playing automatically
        });
        
        // Check if video source exists after a delay
        setTimeout(function() {
            if (heroVideo.readyState === 0 && heroVideo.networkState === 3) {
                // Video failed to load
                console.log('Video source not found, showing fallback');
                if (fallback) {
                    fallback.classList.add('show-fallback');
                }
            }
        }, 2000);
    }
    
    // Keyboard navigation for mobile menu
    const menuToggle = document.getElementById('menuToggle');
    const mobileMenu = document.getElementById('mobileMenu');
    
    if (menuToggle) {
        menuToggle.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                menuToggle.click();
            }
        });
    }
    
    // Close mobile menu on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileMenu && mobileMenu.classList.contains('active')) {
            mobileMenu.classList.remove('active');
            if (menuToggle) {
                menuToggle.classList.remove('active');
            }
            document.body.style.overflow = '';
        }
    });
    
    // Lazy load images
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    observer.unobserve(img);
                }
            });
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});


