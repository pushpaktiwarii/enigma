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
            } else {
                card.classList.remove('visible');
                card.style.display = 'none';
            }
        });
    }
    
    // Lazy loading for event images
    const eventImages = document.querySelectorAll('.event-image img[data-src]');
    
    if ('IntersectionObserver' in window && eventImages.length > 0) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    const dataSrc = img.getAttribute('data-src');
                    
                    if (dataSrc) {
                        // Create new image to preload
                        const newImg = new Image();
                        newImg.onload = function() {
                            img.src = dataSrc;
                            img.removeAttribute('data-src');
                            img.classList.add('loaded');
                            // Add class to parent for CSS fallback
                            img.closest('.event-image')?.classList.add('image-loaded');
                        };
                        newImg.onerror = function() {
                            // If image fails to load, keep the texture background
                            img.removeAttribute('data-src');
                            img.style.display = 'none';
                        };
                        newImg.src = dataSrc;
                        
                        observer.unobserve(img);
                    }
                }
            });
        }, {
            rootMargin: '50px' // Start loading 50px before image is visible
        });
        
        eventImages.forEach(img => {
            imageObserver.observe(img);
        });
    } else {
        // Fallback: Load all images immediately if IntersectionObserver is not supported
        eventImages.forEach(img => {
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc) {
                img.src = dataSrc;
                img.removeAttribute('data-src');
                img.classList.add('loaded');
                img.closest('.event-image')?.classList.add('image-loaded');
            }
        });
    }
});




