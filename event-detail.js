// ============================================
// Event Detail Page - Dynamic Content Loading
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Get event data from URL parameter
    const urlParams = new URLSearchParams(window.location.search);
    const eventSlug = urlParams.get('event');
    
    // Event data (in a real application, this would come from an API or database)
    const eventData = {
        'open-mic': {
            name: 'Open Mic',
            type: 'Solo (Offline)',
            category: 'Literary',
            fee: '₹400',
            rules: [
                'Participants must register before the deadline.',
                'Time limit: 5 minutes per performance.',
                'Original content is encouraged but not mandatory.',
                'No offensive or inappropriate content allowed.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Content Quality: 30%',
                'Delivery and Presentation: 25%',
                'Audience Engagement: 20%',
                'Originality: 15%',
                'Overall Impact: 10%'
            ],
            prize: '₹5,000',
            coordinators: [
                { name: 'Coordinator 1', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator 2', phone: '+91-XXXXXXXXXX' }
            ]
        },
        // Add more event data as needed
    };
    
    // Load event data if available
    if (eventSlug && eventData[eventSlug]) {
        const event = eventData[eventSlug];
        
        // Update page content
        document.getElementById('eventName').textContent = event.name;
        document.getElementById('eventType').textContent = event.type;
        document.getElementById('eventCategory').textContent = event.category;
        document.getElementById('eventFee').textContent = event.fee;
        
        // Update rules
        const rulesList = document.getElementById('rulesList');
        if (rulesList) {
            rulesList.innerHTML = event.rules.map(rule => `<li>${rule}</li>`).join('');
        }
        
        // Update judging criteria
        const judgingList = document.getElementById('judgingList');
        if (judgingList) {
            judgingList.innerHTML = event.judging.map(criteria => `<li>${criteria}</li>`).join('');
        }
        
        // Update prize
        const prizeSection = document.querySelector('.content-section h2');
        if (prizeSection && prizeSection.textContent.includes('Prizes')) {
            prizeSection.textContent = `Prizes Upto: ₹${event.prize}`;
        }
        
        // Update coordinators
        const coordinatorsGrid = document.querySelector('.coordinators-grid');
        if (coordinatorsGrid) {
            coordinatorsGrid.innerHTML = event.coordinators.map(coord => `
                <div class="coordinator-card">
                    <img src="team/coordinator.jpg" alt="${coord.name}" onerror="this.src='https://via.placeholder.com/150?text=Coordinator'">
                    <h3>${coord.name}</h3>
                    <p>${coord.phone}</p>
                </div>
            `).join('');
        }
        
        // Update page title
        document.title = `${event.name} - ENIGMA XIII`;
    }
});


