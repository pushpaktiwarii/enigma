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
        // Check connection speed (if available)
        if ('connection' in navigator) {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (connection) {
                // Don't load video on very slow connections (2G only)
                if (connection.effectiveType === 'slow-2g' || connection.effectiveType === '2g') {
                    // Show poster instead on very slow connections
                    if (heroVideo && heroVideo.poster && heroBackground) {
                        heroBackground.style.backgroundImage = `url(${heroVideo.poster})`;
                        heroBackground.style.backgroundSize = 'cover';
                        heroBackground.style.backgroundPosition = 'center';
                        heroBackground.style.backgroundRepeat = 'no-repeat';
                    }
                    return false;
                }
                // Save data mode - show poster instead
                if (connection.saveData) {
                    if (heroVideo && heroVideo.poster && heroBackground) {
                        heroBackground.style.backgroundImage = `url(${heroVideo.poster})`;
                        heroBackground.style.backgroundSize = 'cover';
                        heroBackground.style.backgroundPosition = 'center';
                        heroBackground.style.backgroundRepeat = 'no-repeat';
                    }
                    return false;
                }
            }
        }
        
        // Allow video on mobile and desktop
        return true;
    }
    
    // Load video only when hero section is visible and conditions are met
    function loadHeroVideo() {
        if (videoLoadAttempted || !heroVideo) return;
        
        if (!shouldLoadVideo()) {
            console.log('Skipping video load - slow connection or data saver mode');
            // Show poster image as background
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
        
        // Set video attributes for mobile compatibility
        heroVideo.setAttribute('playsinline', '');
        heroVideo.setAttribute('webkit-playsinline', '');
        heroVideo.muted = true;
        
        // Handle successful load
        heroVideo.addEventListener('loadeddata', function() {
            videoLoaded = true;
            console.log('Hero video loaded successfully');
            
            // Try to play video
            const playPromise = heroVideo.play();
            
            if (playPromise !== undefined) {
                playPromise.then(function() {
                    // Video is playing
                    console.log('Video is playing');
                    if (fallback) {
                        fallback.classList.remove('show-fallback');
                    }
                }).catch(function(error) {
                    // Autoplay was prevented - this is normal on mobile
                    console.log('Video autoplay prevented (user interaction may be required):', error);
                    // Video will still be loaded, user can tap to play
                    if (fallback) {
                        fallback.classList.remove('show-fallback');
                    }
                });
            }
        }, { once: true });
        
        // Handle when video can start playing
        heroVideo.addEventListener('canplay', function() {
            // Try to play if not already playing
            if (heroVideo.paused) {
                heroVideo.play().catch(function(error) {
                    console.log('Video play attempt:', error);
                });
            }
        }, { once: true });
        
        // Handle load error
        heroVideo.addEventListener('error', function(e) {
            console.log('Video failed to load, showing fallback');
            if (fallback) {
                fallback.classList.add('show-fallback');
            }
            // Show poster as background if video fails
            if (heroVideo && heroVideo.poster && heroBackground) {
                heroBackground.style.backgroundImage = `url(${heroVideo.poster})`;
                heroBackground.style.backgroundSize = 'cover';
                heroBackground.style.backgroundPosition = 'center';
                heroBackground.style.backgroundRepeat = 'no-repeat';
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
            
            // Mobile: Allow user to tap to play video if autoplay is blocked
            if (window.innerWidth < 768) {
                let userInteracted = false;
                
                const startVideoOnInteraction = function() {
                    if (!userInteracted && heroVideo && heroVideo.paused && videoLoaded) {
                        userInteracted = true;
                        heroVideo.play().catch(function(error) {
                            console.log('User-initiated video play failed:', error);
                        });
                    }
                };
                
                // Listen for touch/click events
                heroSection.addEventListener('touchstart', startVideoOnInteraction, { once: true, passive: true });
                heroSection.addEventListener('click', startVideoOnInteraction, { once: true });
                
                // Also try to play on scroll (some browsers allow this)
                window.addEventListener('scroll', function() {
                    if (!userInteracted && heroVideo && heroVideo.paused && videoLoaded) {
                        heroVideo.play().catch(function() {
                            // Ignore errors
                        });
                    }
                }, { once: true, passive: true });
            }
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


