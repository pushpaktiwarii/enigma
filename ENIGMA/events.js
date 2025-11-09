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
});



