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
                    const header = document.querySelector('.header');
                    const headerHeight = header ? header.offsetHeight : 0;
                    const targetPosition = target.offsetTop - headerHeight;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            }
        });
    });
    
    // Hero Video - Loads immediately and plays fast
    const heroVideo = document.querySelector('.hero-video');
    const fallback = document.querySelector('.hero-fallback');
    
    if (heroVideo) {
        // Video is already set with src attribute for immediate loading
        // Ensure it plays as soon as it can
        heroVideo.addEventListener('canplay', function() {
            // Try to play immediately when ready
            if (heroVideo.paused) {
                heroVideo.play().catch(function(error) {
                    // Autoplay prevented - normal on some browsers
                    console.log('Video autoplay prevented:', error);
                });
            }
        }, { once: true });
        
        // Handle successful load
        heroVideo.addEventListener('loadeddata', function() {
            console.log('Hero video loaded successfully');
            // Try to play
            heroVideo.play().catch(function(error) {
                console.log('Video play:', error);
            });
        }, { once: true });
        
        // Handle load error
        heroVideo.addEventListener('error', function(e) {
            console.log('Video failed to load');
            if (fallback) {
                fallback.classList.add('show-fallback');
            }
        }, { once: true });
    }
    
    // Video loads immediately via src attribute - no observer needed
    // Additional play attempts for better compatibility
    if (heroVideo) {
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            // Mobile: Allow user interaction to play video if autoplay is blocked
            if (window.innerWidth < 768) {
                let userInteracted = false;
                
                const startVideoOnInteraction = function() {
                    if (!userInteracted && heroVideo && heroVideo.paused) {
                        userInteracted = true;
                        heroVideo.play().catch(function(error) {
                            console.log('User-initiated video play failed:', error);
                        });
                    }
                };
                
                // Listen for touch/click events on mobile
                heroSection.addEventListener('touchstart', startVideoOnInteraction, { once: true, passive: true });
                heroSection.addEventListener('click', startVideoOnInteraction, { once: true });
            }
        }
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
    
    // Optimized lazy load images with better performance
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver(function(entries, observer) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        // Use Image object for better loading control
                        const newImg = new Image();
                        newImg.decoding = 'async';
                        newImg.onload = function() {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                            img.classList.add('loaded');
                        };
                        newImg.onerror = function() {
                            img.removeAttribute('data-src');
                            img.style.display = 'none';
                        };
                        newImg.src = img.dataset.src;
                    }
                    observer.unobserve(img);
                }
            });
        }, {
            rootMargin: '50px', // Start loading 50px before visible
            threshold: 0.01
        });
        
        document.querySelectorAll('img[data-src]').forEach(img => {
            imageObserver.observe(img);
        });
    }
});


