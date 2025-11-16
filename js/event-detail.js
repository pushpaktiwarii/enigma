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
            fee: '₹300 for two event participation',
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
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'kbc-quiz': {
            name: 'KBC Quiz',
            type: 'Team (Offline)',
            category: 'Literary',
            fee: '₹300 for two event participation',
            rules: [
                'Team size: 2-3 members.',
                'Questions will cover general knowledge.',
                'No electronic devices allowed.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Accuracy: 40%',
                'Speed: 30%',
                'Team Coordination: 30%'
            ],
            prize: '₹5,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'dramatics': {
            name: 'Dramatics',
            type: 'Team (Offline)',
            category: 'Theatre',
            fee: '₹300 for two event participation',
            rules: [
                'Team size: 5-15 members.',
                'Time limit: 15-20 minutes.',
                'Props and costumes allowed.',
                'Original scripts encouraged.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Acting: 30%',
                'Script & Story: 25%',
                'Direction: 20%',
                'Overall Impact: 25%'
            ],
            prize: '₹10,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'chess': {
            name: 'Chess',
            type: 'Solo (Offline)',
            category: 'Sports',
            fee: '₹300 for two event participation',
            rules: [
                'Standard chess rules apply.',
                'Time control: 15+10 minutes.',
                'Swiss system tournament format.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Wins: 100%',
                'Tie-breaker: Head-to-head, then Buchholz'
            ],
            prize: '₹5,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'face-painting': {
            name: 'Face Painting',
            type: 'Solo (Offline)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            rules: [
                'Time limit: 45 minutes.',
                'All materials will be provided.',
                'Original designs encouraged.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Creativity: 35%',
                'Artistic Skill: 30%',
                'Color Harmony: 20%',
                'Overall Appeal: 15%'
            ],
            prize: '₹5,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'canvas-painting': {
            name: 'Canvas Painting',
            type: 'Solo (Offline)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            rules: [
                'Time limit: 3 hours.',
                'Canvas size: 12x16 inches (provided).',
                'All materials will be provided.',
                'Original artwork required.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Creativity: 30%',
                'Technical Skill: 30%',
                'Composition: 20%',
                'Color Usage: 20%'
            ],
            prize: '₹5,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'bug-brawl': {
            name: 'Bug Brawl',
            type: 'Team (Online)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            rules: [
                'Team size: 2-4 members.',
                'Online gaming event.',
                'Specific game rules will be shared.',
                'Stable internet connection required.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Wins: 100%',
                'Tie-breaker: K/D ratio'
            ],
            prize: '₹10,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'fashion-show': {
            name: 'Fashion Show',
            type: 'Team (Offline)',
            category: 'Fashion',
            fee: '₹300 for two event participation',
            rules: [
                'Team size: 5-10 members.',
                'Time limit: 5-7 minutes.',
                'Theme-based presentation.',
                'Original costumes encouraged.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Design & Creativity: 35%',
                'Presentation: 30%',
                'Theme Adherence: 20%',
                'Overall Impact: 15%'
            ],
            prize: '₹10,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'dance': {
            name: 'Dance',
            type: 'Team (Offline)',
            category: 'Dance',
            fee: '₹300 for two event participation',
            rules: [
                'Team size: 5-15 members.',
                'Time limit: 5-8 minutes.',
                'Any dance form allowed.',
                'Original choreography encouraged.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Choreography: 30%',
                'Synchronization: 25%',
                'Energy & Expression: 25%',
                'Overall Impact: 20%'
            ],
            prize: '₹15,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'singing': {
            name: 'Singing',
            type: 'Solo (Offline)',
            category: 'Music',
            fee: '₹300 for two event participation',
            rules: [
                'Time limit: 4-5 minutes.',
                'Karaoke or live music allowed.',
                'Any language or genre.',
                'Original compositions welcome.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Voice Quality: 35%',
                'Pitch & Rhythm: 30%',
                'Expression: 20%',
                'Overall Performance: 15%'
            ],
            prize: '₹10,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'instrumental': {
            name: 'Instrumental',
            type: 'Solo/Team (Offline)',
            category: 'Music',
            fee: '₹300 for two event participation',
            rules: [
                'Time limit: 4-6 minutes.',
                'Any instrument allowed.',
                'Solo or group performance.',
                'Original compositions welcome.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Technical Skill: 35%',
                'Musicality: 30%',
                'Creativity: 20%',
                'Overall Performance: 15%'
            ],
            prize: '₹10,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'roadies': {
            name: 'Roadies',
            type: 'Team (Offline)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            rules: [
                'Team size: 4-6 members.',
                'Physical challenges and tasks.',
                'Team coordination required.',
                'Safety rules must be followed.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Task Completion: 40%',
                'Team Coordination: 30%',
                'Speed: 20%',
                'Strategy: 10%'
            ],
            prize: '₹10,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'power-lifting': {
            name: 'Power Lifting',
            type: 'Solo (Offline)',
            category: 'Sports',
            fee: '₹300 for two event participation',
            rules: [
                'Weight categories will be announced.',
                'Standard powerlifting rules apply.',
                'Safety equipment mandatory.',
                'Medical clearance required.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Total Weight Lifted: 100%',
                'Tie-breaker: Body weight ratio'
            ],
            prize: '₹10,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'mehndi-art': {
            name: 'Mehndi Art',
            type: 'Solo (Offline)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            rules: [
                'Time limit: 1 hour.',
                'Mehndi will be provided.',
                'Original designs encouraged.',
                'Both hands required.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Design Complexity: 30%',
                'Artistic Skill: 30%',
                'Symmetry: 20%',
                'Overall Appeal: 20%'
            ],
            prize: '₹5,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'rangoli': {
            name: 'Rangoli',
            type: 'Solo/Team (Offline)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            rules: [
                'Time limit: 2 hours.',
                'Materials will be provided.',
                'Original designs encouraged.',
                'Size: 4x4 feet area.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Design & Creativity: 35%',
                'Color Harmony: 25%',
                'Precision: 25%',
                'Overall Appeal: 15%'
            ],
            prize: '₹5,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'mandala-art': {
            name: 'Mandala Art',
            type: 'Solo (Offline)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            rules: [
                'Time limit: 2 hours.',
                'Paper and colors will be provided.',
                'Original mandala designs.',
                'Symmetry is important.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Symmetry: 30%',
                'Complexity: 30%',
                'Artistic Skill: 25%',
                'Color Usage: 15%'
            ],
            prize: '₹5,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'shark-tank': {
            name: 'Shark Tank',
            type: 'Team (Offline)',
            category: 'Business',
            fee: '₹300 for two event participation',
            rules: [
                'Team size: 2-4 members.',
                'Present your business idea.',
                'Time limit: 10 minutes presentation + 5 minutes Q&A.',
                'Original business ideas required.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Idea Innovation: 30%',
                'Business Viability: 30%',
                'Presentation: 25%',
                'Q&A Performance: 15%'
            ],
            prize: '₹15,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'framefest': {
            name: 'Framefest',
            type: 'Solo/Team (Offline)',
            category: 'Photo & Film',
            fee: '₹300 for two event participation',
            rules: [
                'Submit original photography or short films.',
                'Theme will be announced.',
                'Time limit for films: 3-5 minutes.',
                'All entries must be original.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Creativity: 30%',
                'Technical Quality: 30%',
                'Story/Composition: 25%',
                'Overall Impact: 15%'
            ],
            prize: '₹10,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'treasure-hunt': {
            name: 'Treasure Hunt',
            type: 'Team (Offline)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            rules: [
                'Team size: 3-5 members.',
                'Follow clues to find treasure.',
                'Time limit: 1 hour.',
                'No external help allowed.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Completion Time: 50%',
                'Clues Solved: 30%',
                'Team Coordination: 20%'
            ],
            prize: '₹10,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'web-die': {
            name: 'Web Die',
            type: 'Team (Online)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            rules: [
                'Team size: 2-4 members.',
                'Online gaming event.',
                'Specific game rules will be shared.',
                'Stable internet connection required.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Wins: 100%',
                'Tie-breaker: Performance metrics'
            ],
            prize: '₹10,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'gamers-arena': {
            name: 'Gamers Arena',
            type: 'Team (Online)',
            category: 'Gaming',
            fee: '₹300 for two event participation',
            rules: [
                'Team size: 2-4 members per game.',
                'Games: BGMI, Free Fire, Valorant.',
                'Online gaming event.',
                'Stable internet connection required.',
                'Specific game rules will be shared.',
                'Decision of judges will be final.'
            ],
            judging: [
                'Wins: 100%',
                'Tie-breaker: K/D ratio, Performance metrics'
            ],
            prize: '₹15,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        }
    };
    
    // Load event data if available
    if (eventSlug && eventData[eventSlug]) {
        const event = eventData[eventSlug];
        
        // Update page content
        const eventNameEl = document.getElementById('eventName');
        const eventTypeEl = document.getElementById('eventType');
        const eventCategoryEl = document.getElementById('eventCategory');
        const eventFeeEl = document.getElementById('eventFee');
        
        if (eventNameEl) eventNameEl.textContent = event.name;
        if (eventTypeEl) eventTypeEl.textContent = event.type;
        if (eventCategoryEl) eventCategoryEl.textContent = event.category;
        if (eventFeeEl) eventFeeEl.textContent = event.fee;
        
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
    } else if (eventSlug) {
        // If event slug exists but no data found, show default with slug
        const eventNameEl = document.getElementById('eventName');
        if (eventNameEl) {
            // Convert slug to readable name
            const readableName = eventSlug.split('-').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
            ).join(' ');
            eventNameEl.textContent = readableName;
        }
        document.title = `${eventSlug} - ENIGMA XIII`;
    }
});


