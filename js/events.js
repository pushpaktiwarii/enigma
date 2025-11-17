// ============================================
// Events Page - Filter Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Preload all event images immediately for faster display
    const eventImages = [
        // Literary
        'https://images.unsplash.com/photo-1471478331149-c72f17e33c51?w=800&q=80', // Open Mic
        'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80', // KBC Quiz
        // Theatre
        'https://images.unsplash.com/photo-1503095396549-807759245b35?w=800&q=80', // Dramatics
        // Sports
        'https://images.unsplash.com/photo-1529699211952-734e80c4d42b?w=800&q=80', // Chess
        'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800&q=80', // Power Lifting
        // Creative
        'https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=800&q=80', // Face Painting
        'https://images.unsplash.com/photo-1541961017774-22349e4a1262?w=800&q=80', // Canvas Painting
        'https://images.unsplash.com/photo-1606800053563-1c1c0a1a0a0a?w=800&q=80', // Mehndi Art
        'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=800&q=80', // Rangoli
        'https://images.unsplash.com/photo-1578301978018-3005759f48f7?w=800&q=80', // Mandala Art
        'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=800&q=80', // Roadies
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80', // Treasure Hunt
        // Online Events
        'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=800&q=80', // Bug Brawl
        'https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=800&q=80', // Web Die
        'https://images.unsplash.com/photo-1542751371-adc38448a05e?w=800&q=80', // Gamers Arena
        // Fashion
        'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=800&q=80', // Fashion Show
        // Dance
        'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&q=80', // Dance
        // Music
        'https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80', // Singing
        'https://images.unsplash.com/photo-1511379938547-c1f69419868d?w=800&q=80', // Instrumental
        // Business
        'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80', // Shark Tank
        // Photo & Film
        'https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=800&q=80' // Framefest
    ];
    
    // Preload images in parallel - start loading immediately
    eventImages.forEach((url, index) => {
        const img = new Image();
        img.crossOrigin = 'anonymous';
        img.onload = function() {
            console.log(`✅ Event image ${index + 1} preloaded`);
        };
        img.onerror = function() {
            console.warn(`⚠️ Failed to preload image ${index + 1}:`, url);
        };
        img.src = url;
    });
    
    // Filter functionality removed - all events are now visible by default
    const eventCards = document.querySelectorAll('.event-card');
    
    // Show all events by default
    eventCards.forEach(card => {
        card.classList.add('visible');
        card.style.display = 'block';
    });
    
    // Function to load an image
    function loadEventImage(img) {
        if (!img || !img.hasAttribute('data-src')) return;
        
        const dataSrc = img.getAttribute('data-src');
        if (!dataSrc || img.src) return; // Already loaded
        
        const newImg = new Image();
        newImg.decoding = 'async';
        
        newImg.onload = function() {
            img.src = dataSrc;
            img.removeAttribute('data-src');
            img.classList.add('loaded');
            img.closest('.event-image')?.classList.add('image-loaded');
            
            // Remove loading state
            const eventImage = img.closest('.event-image');
            if (eventImage) {
                eventImage.classList.remove('image-loading');
            }
        };
        
        newImg.onerror = function() {
            console.warn('Failed to load image:', dataSrc);
            img.removeAttribute('data-src');
            img.style.display = 'none';
            const eventImage = img.closest('.event-image');
            if (eventImage) {
                eventImage.classList.remove('image-loading');
                eventImage.classList.add('image-error');
            }
        };
        
        // Mark as loading
        const eventImage = img.closest('.event-image');
        if (eventImage) {
            eventImage.classList.add('image-loading');
        }
        
        newImg.src = dataSrc;
    }
    
    // Advanced lazy loading for event images with priority loading
    const eventImageElements = document.querySelectorAll('.event-image img[data-src]');
    
    // Preload first 6 visible images immediately (above the fold)
    const preloadCount = Math.min(6, eventImageElements.length);
    for (let i = 0; i < preloadCount; i++) {
        const img = eventImageElements[i];
        if (img && img.hasAttribute('data-src')) {
            loadEventImage(img);
        }
    }
    
    // Lazy load remaining images with IntersectionObserver
    if ('IntersectionObserver' in window && eventImageElements.length > preloadCount) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img && img.hasAttribute('data-src')) {
                        loadEventImage(img);
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px', // Start loading 50px before image is visible
            threshold: 0.01 // Trigger when 1% of image is visible
        });
        
        // Observe remaining images (skip first 6)
        for (let i = preloadCount; i < eventImageElements.length; i++) {
            const img = eventImageElements[i];
            if (img && img.hasAttribute('data-src')) {
                imageObserver.observe(img);
            }
        }
    } else {
        // Fallback: Load all remaining images immediately
        for (let i = preloadCount; i < eventImageElements.length; i++) {
            const img = eventImageElements[i];
            if (img && img.hasAttribute('data-src')) {
                loadEventImage(img);
            }
        }
    }
    
    // Also load images when they become visible after initial load
    setTimeout(() => {
        const allEventImages = document.querySelectorAll('.event-image img[data-src]');
        allEventImages.forEach(img => {
            if (img && img.hasAttribute('data-src')) {
                const card = img.closest('.event-card');
                if (card && card.style.display !== 'none' && card.classList.contains('visible')) {
                    loadEventImage(img);
                }
            }
        });
    }, 100);
});





