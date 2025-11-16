// ============================================
// Events Page - Filter Functionality
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.filter-btn');
    const eventCards = document.querySelectorAll('.event-card');
    
    // Get category from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const categoryParam = urlParams.get('category');
    
    // Set active filter based on URL parameter
    if (categoryParam) {
        filterButtons.forEach(btn => {
            if (btn.dataset.filter === categoryParam) {
                btn.classList.add('active');
            } else {
                btn.classList.remove('active');
            }
        });
        filterEvents(categoryParam);
    }
    
    // Filter button click handlers
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Remove active class from all buttons
            filterButtons.forEach(btn => btn.classList.remove('active'));
            
            // Add active class to clicked button
            this.classList.add('active');
            
            // Get filter value
            const filter = this.dataset.filter;
            
            // Filter events
            filterEvents(filter);
        });
    });
    
    function filterEvents(category) {
        eventCards.forEach(card => {
            if (category === 'all' || card.dataset.category === category) {
                card.classList.add('visible');
                card.style.display = 'block';
                // Load images for visible cards
                const img = card.querySelector('img[data-src]');
                if (img && img.hasAttribute('data-src')) {
                    const dataSrc = img.getAttribute('data-src');
                    if (dataSrc && !img.src) {
                        const newImg = new Image();
                        newImg.onload = function() {
                            img.src = dataSrc;
                            img.removeAttribute('data-src');
                            img.classList.add('loaded');
                            img.closest('.event-image')?.classList.add('image-loaded');
                        };
                        newImg.onerror = function() {
                            img.removeAttribute('data-src');
                            img.style.display = 'none';
                        };
                        newImg.src = dataSrc;
                    }
                }
            } else {
                card.classList.remove('visible');
                card.style.display = 'none';
            }
        });
    }
    
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
    const eventImages = document.querySelectorAll('.event-image img[data-src]');
    
    // Preload first 6 visible images immediately (above the fold)
    const preloadCount = Math.min(6, eventImages.length);
    for (let i = 0; i < preloadCount; i++) {
        const img = eventImages[i];
        if (img && img.hasAttribute('data-src')) {
            loadEventImage(img);
        }
    }
    
    // Lazy load remaining images with IntersectionObserver
    if ('IntersectionObserver' in window && eventImages.length > preloadCount) {
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
        for (let i = preloadCount; i < eventImages.length; i++) {
            const img = eventImages[i];
            if (img && img.hasAttribute('data-src')) {
                imageObserver.observe(img);
            }
        }
    } else {
        // Fallback: Load all remaining images immediately
        for (let i = preloadCount; i < eventImages.length; i++) {
            const img = eventImages[i];
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





