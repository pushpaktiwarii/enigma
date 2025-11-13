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
    
    // Optimized Hero Video Loading - Only loads when needed
    const heroVideo = document.querySelector('.hero-video');
    const heroBackground = document.querySelector('.hero-background');
    const fallback = document.querySelector('.hero-fallback');
    let videoLoaded = false;
    let videoLoadAttempted = false;
    
    // Check connection speed and user preference
    function shouldLoadVideo() {
        // Check if on mobile (save bandwidth)
        if (window.innerWidth < 768) {
            // Show poster image on mobile instead of video
            if (heroVideo && heroVideo.poster) {
                // Hide video element
                heroVideo.style.display = 'none';
                // Set poster as background on hero-background
                if (heroBackground) {
                    heroBackground.style.backgroundImage = `url(${heroVideo.poster})`;
                    heroBackground.style.backgroundSize = 'cover';
                    heroBackground.style.backgroundPosition = 'center';
                    heroBackground.style.backgroundRepeat = 'no-repeat';
                }
            }
            return false; // Don't load video on mobile
        }
        
        // Check connection speed (if available)
        if ('connection' in navigator) {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (connection) {
                // Don't load video on slow connections (2G, slow 3G)
                if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                    return false;
                }
                // Save data mode
                if (connection.saveData) {
                    return false;
                }
            }
        }
        
        return true;
    }
    
    // Load video only when hero section is visible and conditions are met
    function loadHeroVideo() {
        if (videoLoadAttempted || !heroVideo) return;
        
        if (!shouldLoadVideo()) {
            console.log('Skipping video load - mobile or slow connection');
            // On mobile, ensure poster image is visible as background
            if (heroVideo && heroVideo.poster && heroBackground) {
                // Preload poster image
                const posterImg = new Image();
                posterImg.src = heroVideo.poster;
                posterImg.onload = function() {
                    heroBackground.style.backgroundImage = `url(${heroVideo.poster})`;
                    heroBackground.style.backgroundSize = 'cover';
                    heroBackground.style.backgroundPosition = 'center';
                    heroBackground.style.backgroundRepeat = 'no-repeat';
                };
                posterImg.onerror = function() {
                    console.log('Poster image failed to load');
                };
            }
            if (fallback) {
                fallback.classList.add('show-fallback');
            }
            return;
        }
        
        videoLoadAttempted = true;
        const videoSrc = heroVideo.getAttribute('data-src');
        
        if (!videoSrc) {
            console.log('No video source found');
            if (fallback) {
                fallback.classList.add('show-fallback');
            }
            return;
        }
        
        // Load video source
        heroVideo.src = videoSrc;
        heroVideo.load(); // Start loading
        
        // Handle successful load
        heroVideo.addEventListener('loadeddata', function() {
            videoLoaded = true;
            console.log('Hero video loaded successfully');
            heroVideo.play().catch(function(error) {
                console.log('Video autoplay failed (normal on some browsers):', error);
            });
            if (fallback) {
                fallback.classList.remove('show-fallback');
            }
        }, { once: true });
        
        // Handle load error
        heroVideo.addEventListener('error', function(e) {
            console.log('Video failed to load, showing fallback');
            if (fallback) {
                fallback.classList.add('show-fallback');
            }
        }, { once: true });
    }
    
    // Use Intersection Observer to load video only when hero is visible
    if (heroVideo) {
        const heroObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !videoLoadAttempted) {
                    // Hero section is visible, load video
                    loadHeroVideo();
                }
            });
        }, {
            threshold: 0.1 // Load when 10% visible
        });
        
        const heroSection = document.querySelector('.hero-section');
        if (heroSection) {
            heroObserver.observe(heroSection);
        }
        
        // Fallback: Load after 1 second if still not loaded (for fast connections)
        setTimeout(() => {
            if (!videoLoadAttempted && shouldLoadVideo()) {
                loadHeroVideo();
            }
        }, 1000);
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


