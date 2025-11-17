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
            eventFormat: 'Open mic style: Poetry, stand-up comedy, storytelling, monologue or any other performance art except for singing and rap.',
            duration: '90-120 seconds per performance',
            venue: 'UCER Auditorium',
            rules: [
                'Respectful languages and content (no hate speech, profanity, or discriminatory material).',
                'No harmful or dangerous performances.',
                'Participants must arrive 30 minutes before the event.'
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
            type: 'Solo (Offline)',
            category: 'Literary',
            fee: '₹300 for two event participation',
            rounds: [
                {
                    name: 'Round 1: Elimination Round',
                    participants: '100',
                    objective: 'Reduce to 40 participants',
                    structure: '15 MCQs, 30 seconds per question, 1 point for correct answer, negative marking for incorrect',
                    cutOff: 'Top 40 participants proceed'
                },
                {
                    name: 'Round 2: Fastest Finger First',
                    participants: '40',
                    objective: 'Identify 20 participants for final round',
                    structure: 'Single question, 10 seconds time limit, first 20 correct answers proceed'
                },
                {
                    name: 'Round 3: Final Round',
                    participants: '20',
                    objective: 'Answer 15 questions with increasing difficulty',
                    structure: 'Questions 1-5: 30 seconds each, Questions 6-10: 45 seconds each, Questions 11-15: 60 seconds each',
                    lifelines: '2 lifelines per participant: 50:50, Flip of question'
                }
            ],
            rules: [
                'Participants must stay silent during questioning.',
                'Participants can use pen and paper for calculations.',
                'Participants must buzz in to answer in Round 2.',
                'Incorrect answers in Round 2 lead to disqualification.',
                'Lifelines can be used only once per question.'
            ],
            judging: [
                'Accuracy: 40%',
                'Speed: 30%',
                'Correct answers increase prize money based on difficulty levels'
            ],
            prize: '₹5,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'dramatics': {
            name: 'Dramatics/Nukkad Natak',
            type: 'Team (Offline)',
            category: 'Theatre',
            fee: '₹300 for two event participation',
            theme: [
                'Dowry',
                'Domestic violence and Consequences',
                'Drug or Alcohol Addiction',
                'Corruption',
                'Vikshit Bharat',
                'Cyber Crime',
                'Open Innovation'
            ],
            duration: '5-7 minutes (6 minutes is ideal time)',
            venue: 'UCER Auditorium',
            rounds: 'Final Round Only',
            rules: [
                'All participants must report 30 minutes before the event for briefing and sequence allotment.',
                'The script must be original. Using copyrighted content without proper credit or approval is not allowed.',
                'Teams must strictly follow their chosen theme.',
                'The performance should last between 5 to 7 minutes. Exceeding the time limit will result in penalties. 30 seconds relaxation time would be given after 7 minutes.',
                'Vulgar language, obscene gestures, or violence of any kind are strictly prohibited.',
                'Avoid targeting any community, religion, political party, or individual.',
                'Props should be minimal and self-managed. Use of fire, water, or any damaging substances is not permitted.',
                'Performances must rely on natural voice projection. Use of microphones or external sound systems should be avoided.'
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
            format: 'Knockout format',
            timeLimit: 'First round: 7 minutes, Subsequent rounds: 10 minutes each',
            venue: 'UCER Central Library',
            rules: [
                'All participants must report on time.',
                'A touched piece must be moved.',
                'No distractions, external help, or communication is allowed.',
                'Rule violations lead to warnings, time penalties, or disqualification.',
                'Illegal moves must be corrected immediately, repeated offenses can result in penalties.',
                'After making a move, the player must press the clock with the same hand. In case of disputes the clock is made by arbiter.',
                'Players must manage their clock; running out of time results in a loss.',
                'A player must make a move to remove check on their king. If there is no legal moves to escape check, it result in checkmate.',
                'A draw occurs if there is three-fold repetition or insufficient material is present, also 50 move rule apply as well.',
                'A player is not allowed to stand from their chairs in middle of game.',
                'If any participant has an event clash with another event scheduled on the same day, they must inform the head or volunteers in advance.'
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
            name: 'Face Painting (Kaladarshan)',
            type: 'Team (Offline)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            teamSize: '2 members (one painter and one model)',
            theme: [
                'Climate Change',
                'Halloween',
                'Nature Magic',
                'Aatmanirbhar Bharat - Colors of Self-Reliance'
            ],
            duration: '120 minutes (2 hours)',
            venue: 'Student Activity Centre Library',
            rules: [
                'Participants must report 15 minutes before the event starts.',
                'Painting colors used should be hypoallergenic and skin safe.',
                'Props and accessories (e.g., headgear, glitter) are encouraged if they enhance creativity.',
                'Ensure submission before the given deadline.',
                'Work deviating from the theme, rules or guidelines may be disqualified.',
                'Avoid religious or political depictions.',
                'Prepare a relatable Tag-Line representing your artwork and conveying a powerful/impactful message.'
            ],
            judging: [
                'Theme Interpretation',
                'Creativity and originality',
                'Color Harmony & Technique',
                'Overall presentation',
                'Neatness & Detailing'
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
            theme: [
                'Current Global Concern',
                'The power of colors',
                'Human Emotions'
            ],
            canvasSize: '10 X 14 inches',
            duration: '2 hours',
            submissionFormat: 'Original work on a physical canvas',
            rules: [
                'All participants must report to the venue 15 minutes prior to the commencement of the event.',
                'Allowed mediums could acrylic, oil, water, water color, pastels, charcoal, or mixed media.',
                'Participants must bring their own equipment including allowed mediums and canvas board.',
                'No copyrighted images or work.',
                'Must be the own artist\'s work.',
                'Ensure submission before the given deadline.',
                'Work deviating from the theme, rules or guidelines may be disqualified.'
            ],
            judging: [
                'Adhere to the theme',
                'Creativity and originality',
                'Use of colors and techniques',
                'Overall presentation'
            ],
            prize: '₹5,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'bug-brawl': {
            name: 'Bug Brawl',
            type: 'Solo (Offline)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            description: 'BugBrawl solo event challenges individual participants to find and fix as many software bugs as possible within a set time limit. Each participant dives into the code, identifying errors, unexpected behaviors, or potential vulnerabilities. Points are awarded based on the number and complexity of bugs discovered, with top performers earning prizes.',
            objective: 'Test participants\' skills in debugging, accuracy, and speed, providing a focused coding challenge to enhance software quality.',
            date: '21st November 2025',
            venue: 'Lab 7, Library, UCER',
            duration: '1 hour',
            rules: [
                'BugBrawl is a solo event.',
                'Personal systems are not allowed.',
                'Phones are not allowed during the event.',
                'Every participant is requested to reach the venue 10 minutes prior.',
                'Plagiarism/AI content will be disqualified.',
                'Any form of misconduct or inappropriate behaviour will not be tolerated.',
                'Points will be awarded based on the quantity and severity of bugs identified and fixed.',
                'Prizes will be awarded to the top performers.',
                'This event is a solo competition, teamwork is not permitted.'
            ],
            judging: [
                'Quantity of bugs found',
                'Severity of bugs identified',
                'Accuracy in fixing bugs',
                'Speed of completion'
            ],
            prize: '₹10,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'fashion-show': {
            name: 'Fashion Show - Lights, Camera, Couture!',
            type: 'Solo (Offline)',
            category: 'Fashion',
            fee: '₹300 for two event participation',
            theme: 'Bollywood - Celebrate the glitz and glamour of Bollywood! From classic cinema elegance to modern red-carpet looks — embody the true essence of Indian film fashion with confidence and style.',
            competitionStructure: [
                {
                    round: 'Round 1: Ramp Walk',
                    details: [
                        'Each participant will walk individually on stage and present 3-5 poses.',
                        'Based on performance, 20 participants will be shortlisted for Round 2.'
                    ]
                },
                {
                    round: 'Round 2: Q&A Round',
                    details: [
                        'Shortlisted participants will introduce themselves, describe their outfit, and answer 1-2 questions from the judges.',
                        'No outfit changes are allowed; participants must wear the same attire as in Round 1.',
                        'Two winners will be selected — one male and one female.'
                    ]
                }
            ],
            rules: [
                'Arrive 1 hour early for outfit changes — latecomers will be disqualified.',
                'Each participant must depict a Bollywood character or personality through their outfit and performance.',
                'Bring your own props; organizers won\'t provide any.',
                'Outfits must be decent, elegant, and Bollywood-themed.',
                'Maintain discipline, professionalism, and respect at all times.',
                'Avoid vulgar, offensive, or disrespectful actions or gestures on stage.',
                'Use of foul language or misconduct toward anyone will result in immediate disqualification.'
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
            type: 'Solo/Team (Offline)',
            category: 'Dance',
            fee: '₹300 for two event participation',
            screeningRound: {
                for: 'UGI Students only',
                date: '20th November',
                duration: '1 minute 30 seconds',
                note: 'Screening will be conducted only if the number of participants exceeds 60. Shortlisted participants will qualify for the main competition rounds.'
            },
            soloDance: {
                date: '21st November',
                timeLimit: '1:30-2 minutes',
                note: 'Top 8 solo participants will qualify to perform on Day 2 (Final Event).'
            },
            groupDance: {
                date: '22nd November (Final Event)',
                timeLimit: '2:30-3 minutes',
                teamSize: '2 to 6 members'
            },
            prizeDistribution: {
                date: '22nd November (Final Event)',
                venue: 'UIT Auditorium'
            },
            rules: [
                'All dance forms are allowed.',
                'Use of props is permitted (extra marks will be awarded for creative use). No fireworks is allowed.',
                'Exceeding the time limit will lead to negative marking.',
                'Submit your performance music to the activity heads before the competition.',
                'Language of the song preferred - English, Hindi and Punjabi only.',
                'Dress code must be decent and respectful.',
                'No vulgar or outrageous performances will be entertained.',
                'Participants must maintain discipline and adhere to time limits strictly.'
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
            type: 'Solo/Group (Offline)',
            category: 'Music',
            fee: '₹300 for two event participation',
            categories: 'Two separate categories - Solo and Group',
            venue: 'Open Theater, UIT',
            performanceDuration: {
                solo: '1:30 - 2 minutes',
                group: '5 minutes',
                screening: '1 to 1:30 minutes (if screening conducted)'
            },
            groupSize: '2-5 members only',
            registration: [
                'For UGI Students: Offline',
                'For Non-UGI student (only): Online'
            ],
            rules: [
                'If the number of participants exceeds 60, a screening round will be conducted. For screening round time limits is 1 to 1:30 minutes.',
                'All participants must report 30 minutes before the event starts.',
                'Participants must bring their own musical instruments if required.',
                'Karaoke / backing tracks must be submitted in advance (via phone or USB drive).',
                'Time limit must be strictly followed; exceeding time will lead to negative marking.',
                'Abusive, vulgar, or offensive lyrics or actions are strictly prohibited.',
                'Obscenity or inappropriate stage behavior will lead to disqualification.',
                'Participants must maintain discipline and respect towards judges, coordinators and other participants.',
                'Judges\' decision will be final and binding.'
            ],
            judging: [
                'Stage Presence',
                'Vocal Techniques',
                'Rhythm',
                'Performance Skills',
                'Scale',
                'Overall Presentation'
            ],
            prize: '₹10,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'instrumental': {
            name: 'Instrumental',
            type: 'Solo (Offline)',
            category: 'Music',
            fee: '₹300 for two event participation',
            date: '22 November 2025',
            day: 'Saturday',
            venue: 'Open Theater, UIT',
            duration: '5 minutes for SOLO (Including setup time)',
            registration: [
                'For UGI Students: Offline',
                'For Non-UGI student (only): Online'
            ],
            rules: [
                'Punctuality: All participants must arrive at the venue at least 30 minutes prior to the event start time.',
                'Instrumentation: Participants are required to bring their own instruments.',
                'Equipment: Participants must provide their own aux cable and amplifier if necessary.',
                'Time Management: Each performance must be completed within the allotted 5 minutes for solo.',
                'Code of Conduct: Any form of misconduct or inappropriate behavior will not be tolerated.',
                'If there are more than 60 participants, a screening will be conducted only for the UGI students.'
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
            name: 'Mehndi Art (Kaladarshan)',
            type: 'Solo (Offline)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            theme: [
                'Festive Vibes',
                'Nature\'s Beauty',
                'Bridal Elegance'
            ],
            duration: '90 Minutes',
            date: '21st November 2025',
            venue: 'UIP Campus',
            rules: [
                'All participants must report to the venue 30 minutes prior to the commencement of the event.',
                'You have to design on a hand (front or back).',
                'You have to bring your own partner to show your creativity.',
                'Participants must bring their mehendi cones.',
                'No copyrighted design or work.',
                'Using pre-made or stenciled designs may lead to disqualification.',
                'Ensure submission before deadline.'
            ],
            judging: [
                'Neatness and precision',
                'Complexity to the design',
                'Adherence to the theme',
                'Creativity and originality'
            ],
            prize: '₹5,000',
            coordinators: [
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' },
                { name: 'Coordinator Name', phone: '+91-XXXXXXXXXX' }
            ]
        },
        'rangoli': {
            name: 'Rangoli (Kaladarshan)',
            type: 'Team (Offline)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            introduction: 'The Rangoli represents the happiness, positivity and liveliness, and is intended to welcome Lakshmi, the goddess of prosperity and good luck. The purpose of rangoli is beyond decoration. It can display one\'s ideas, imagination, creativity and innovation with the help of colours.',
            theme: [
                'Sanskriti aur Samriddhi (Culture and Prosperity)',
                'Bharat Ekta (Unity in Diversity)'
            ],
            teamSize: 'Maximum 3 members per team',
            rounds: 'Only one round of competition',
            rules: [
                'All participants must report to the venue 30 minutes prior to the commencement of the event.',
                'Use of Stencil is Strictly Prohibited',
                'You can use Colour Bottles to fill Colours.',
                'Teams will be responsible for arrangement of the material required to prepare rangoli.',
                'Only rangoli colours can be used for making rangoli.',
                'The participants will not be allowed to refer to any printed material etc. for preparing rangoli.',
                'Any act of indiscipline by participants calls for cancellation of registration.',
                'Judges decision will be final and binding.'
            ],
            judging: [
                'Relevance/Depth of theme',
                'Creativity',
                'Colour combination',
                'Message through Rangoli (Details and Clarity in Rangoli Art)',
                'Overall Appearance and appeal'
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
            tagline: 'Unfold Your Patterns of Creativity',
            competitionStructure: [
                {
                    round: 'Round 1 - Free Flow of Imagination',
                    theme: 'Artist\'s Choice',
                    duration: '1 hour 30 minutes (1.5 hours)',
                    objective: 'Showcase your creativity, technique, and Individuality through your chosen concept.',
                    note: 'Let your Imagination take the lead — from traditional patterns to modern interpretations, the canvas is yours!'
                },
                {
                    round: 'Round 2 - The Mystery Mandala',
                    theme: 'Surprise Theme (revealed on the day of the event)',
                    duration: '2 hours',
                    objective: 'Test your adaptability and artistic spontaneity as you craft a mandala based on the given theme.',
                    note: 'Be ready for a creative twist — this round will challenge how well you can think on the spot and bring ideas to life.'
                }
            ],
            rules: [
                'Participants must bring their own drawing/painting materials (paper sheets, pens, colors, compasses, rulers, etc.).',
                'Canvas Size: A3 or A4 sheets only.',
                'Medium: Any medium of your choice — pencil, pen, markers, watercolor, acrylics, etc.',
                'Artwork must be original. Tracing or digital assistance is strictly prohibited.',
                'Late submissions will lead to point deductions.'
            ],
            judging: [
                'Creativity & Originality',
                'Neatness & Symmetry',
                'Theme Representation',
                'Color Combination',
                'Overall Presentation',
                'Depiction of Artwork (2-minutes explanation by participant)'
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
            eventType: 'Photography & Videography Reel-Making Competition',
            eventDuration: '21st – 22nd November',
            venue: 'Ground Floor Conference Hall, United Institute of Management',
            resultDeclaration: '22nd November (Final Day of Enigma XIII)',
            description: 'Frame Fest is dedicated to capturing the vibrant spirit of Enigma XIII through visual storytelling. Participants are required to record photos and videos of various events across both days and create a 1-1.5 minute highlight reel showcasing energy, enthusiasm, and memorable moments.',
            submissionRequirement: 'Every participant/team must submit both: 1) A 1-1.5 minute reel, and 2) 3-5 best photographs clicked during the fest',
            rules: [
                'Submit original photography or short films.',
                'Reel duration: 1-1.5 minutes.',
                'Submit 3-5 best photographs.',
                'All entries must be original.',
                'Capture events across both days of Enigma XIII.',
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
            name: 'Treasure Hunt - The Guardians and the Portal of Enigmara',
            type: 'Team (Offline)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            themeTitle: 'The Guardians and the Portal of Enigmara',
            storyline: 'Earth was once a place of pure light and harmony, protected by four mighty Guardians representing Fire, Water, Air, and Earth. A strange portal appeared, leading to Enigmara—a realm of endless mirages and darkness where evil spirits feed on fear and chaos. The creatures of Enigmara began seeping through the portal, causing despair. The Guardians discovered a prophecy: "To close the portal, the Guardians must venture into the Mirage of Shadows—Where truth is illusion and illusion is truth." Only the one who finds the Key of Enigmara can restore the balance of worlds. The Guardians embarked on this journey, leaving clues, riddles, and symbols. You are the Seekers of Light—chosen to retrace their journey, solve the mysteries, and uncover the Key to close the Portal of Enigmara before darkness consumes the world.',
            mission: [
                'Follow the trail of the Guardians.',
                'Unravel the puzzles hidden in the mirages.',
                'Find the Key of Enigmara.',
                'And restore balance between light and darkness before time runs out.'
            ],
            stages: [
                {
                    stage: 'First Stage',
                    description: 'Written Paper (English, Quants, Reasoning)',
                    note: '10 Teams Shortlisted for Final Stage'
                },
                {
                    stage: 'Final Stage',
                    description: 'Find Clues'
                }
            ],
            rules: [
                'Restricted Areas: Entry is strictly prohibited in the Laboratory Spaces. Any violation will lead to immediate disqualification.',
                'The Reception area is also off-limits for clue-searching purposes, as no clues are hidden there. Please avoid disturbing this space.',
                'Respect for Property: Do not cause any damage to objects, equipment, or decor. Participants will be held liable for any damages incurred and will be required to compensate accordingly.',
                'Do not take any decoration pieces or props with you. These items are essential to the setup and experience of the event.',
                'Fair Play: Teams must not tamper with or take clues that belong to other teams. Any interference with another team\'s progress, such as stealing or destroying their clues, will result in immediate disqualification.'
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
            type: 'Solo (Online)',
            category: 'Creative',
            fee: '₹300 for two event participation',
            description: 'A competitive front-end web development challenge requiring participants to design and develop a fully functional and visually appealing web page within a limited time based on a provided theme or task.',
            focus: 'Creativity, UI/UX understanding, responsive design skills, and clean coding practices.',
            eligibility: 'Open to all students interested in front-end development. Individual participation only.',
            date: '21st November 2025',
            venue: 'Ground Floor Lab, United Institute of Management',
            submissionDeadline: '21st November 2025, 3:30 PM',
            resultDeclaration: '21st November 2025',
            technologyRestriction: 'Only HTML and CSS may be used (No JavaScript, libraries, or frameworks)',
            internetUse: 'Allowed only for images, icons, and fonts',
            equipment: 'Participants must bring their own laptop; however, a desktop system will be provided if a participant does not have a laptop',
            codingTool: 'Notepad or any basic text editor must be used (No VS Code, Sublime, editors with auto-complete, or online IDEs)',
            submissionFormat: 'Project files must be submitted in .zip format via a Google Form link provided at the event',
            rules: [
                'Only HTML and CSS may be used (No JavaScript, libraries, or frameworks).',
                'Internet use allowed only for images, icons, and fonts.',
                'Participants must bring their own laptop; however, a desktop system will be provided if a participant does not have a laptop.',
                'Notepad or any basic text editor must be used (No VS Code, Sublime, editors with auto-complete, or online IDEs).',
                'Strict prohibition of AI code generators, plagiarism, or copying (will result in immediate disqualification).',
                'Project files must be submitted in .zip format via a Google Form link provided at the event.',
                'Submission Deadline: 21st November 2025, 3:30 PM.',
                'Judges\' decisions will be final and binding.'
            ],
            judging: [
                'Creativity & Visual Design: 30%',
                'Code Structure & Cleanliness: 25%',
                'Responsiveness & Layout Adaptability: 25%',
                'Originality & Concept: 20%'
            ],
            prize: '₹10,000',
            coordinators: [
                { name: 'Abhishek Chauhan', phone: '+91 79058 78253' },
                { name: 'Shivangi Singh', phone: '+91 75183 84955' }
            ]
        },
        'free-fire': {
            name: 'Free Fire',
            type: 'Team (Online)',
            category: 'Gaming',
            fee: '₹300 for two event participation',
            teamComposition: 'Each team must consist of 4 Members',
            rounds: [
                'Initial Rounds (As Per Registration)',
                'Qualification Round',
                'Final Round'
            ],
            venue: 'Online Mode (20 Minutes Each Game)',
            rules: [
                'No VPN.',
                'PC Players are not allowed.',
                'If any participants get caught using game bugs, hacks or any unfair means, the whole team will be disqualified.',
                'Use of abusive words and loud conversations is strictly prohibited.',
                'Guns Property will remain off.',
                'Full map matches will be the same as the BR Rank mode.',
                'Team-up is not allowed in the Full Map Matches.',
                'Every team should join in the lobby with their registered players only.',
                'After the 2nd Round the matches will be CLASH SQUAD (Unlimited Ammo).',
                'Character Skills and Guns Property will remain off in CS mode.',
                'Grenade, Spray bombs and Flash bombs are not allowed in CS matches.',
                'Double Vectors are not allowed in CS.',
                'Everyone must share their Screen Recording after the match.',
                'Breaking of Gloo Walls are allowed.',
                'All the Teams should be there within 5 min after getting the Custom ID and Password.',
                'No teams will be considered if they get late. Be on time everyone.',
                'If any team failed to join in the Custom lobby on time then the team will face disqualification. We are not responsible if you get late and fail to join custom rooms.',
                'Every Custom Lobby will be host by the tournament Officials.'
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
        },
        'bgmi': {
            name: 'BGMI (Battle Grounds Mobile India)',
            type: 'Team (Online)',
            category: 'Gaming',
            fee: '₹300 for two event participation',
            teamComposition: '4 player team tournament',
            tournamentStructure: [
                {
                    stage: 'Quarterfinal',
                    description: 'Group stages is a 3-map series'
                },
                {
                    stage: 'Semifinals',
                    description: 'Group stages is a 3-map series'
                },
                {
                    stage: 'Finals',
                    description: '4 match series (2 ERANGLES, 1 SANHOK, and 1 MIRAMAR)'
                }
            ],
            lobbySize: 'Up to 16-20 teams will be playing in a lobby',
            pointsSystem: {
                perKill: '1 point for every kill',
                ranking: {
                    '#1': '10 points',
                    '#2': '6 points',
                    '#3': '5 points',
                    '#4': '4 points',
                    '#5': '3 points',
                    '#6': '2 points',
                    '#7': '1 point',
                    '#8': '1 point',
                    '#9-16': '0 points'
                }
            },
            rules: [
                'It is a 4 player team tournament.',
                'Emulators are not allowed in any game mode organized. The player will be disqualified if found using any kind of emulator.',
                'Any game modifying tools except \'GFX tool\' is not allowed.',
                'Players can play on android/ios tablets/phones only.',
                'Only in-game voice chat should be used after the game is started till its completion.',
                'Any use of unfair means such as aimbot, trigger bot, ESP will be disqualified.',
                'Should a team/player fail to join the room in time, their squad/they will be given 0 points for it.',
                'Waiting time is at most 10 minutes between games.',
                'Exiting a game without good reason will disqualify the team.',
                'The exploitation of bugs that hinders fair play will result in disqualification.',
                'For the tiebreaker of the points, total team/solo kills will be considered for breaking the tie.',
                'Players are also requested to sit in their respective slots otherwise they may face disqualification.',
                'For the further tiebreaker, number of chicken dinners will be considered.',
                'Organizers would not be held responsible for connectivity issues on the participant\'s side.',
                'The entry fee would not be refunded under any circumstances.',
                'Participants are requested to remain ready at least 15 minutes prior to the start of any match. Late entries would not be allowed.',
                'Any kind of verbal abuse by any player in lobby and room chat may also lead teams to disqualification.',
                'Maps selected will be notified to the participants before the match.',
                'Groups will be revealed once registrations will be completed.',
                'Players will get the points table after each round ends.',
                'According to teams standings in points table teams will go ahead in tournament.'
            ],
            judging: [
                'Points based on ranking and kills',
                'Tie-breaker: Total team/solo kills',
                'Further tie-breaker: Number of chicken dinners'
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
            let rulesHTML = '';
            
            // Add event format if available
            if (event.eventFormat) {
                rulesHTML += '<li><strong>Event Format:</strong> ' + event.eventFormat + '</li>';
            }
            
            // Add theme if available
            if (event.theme) {
                if (Array.isArray(event.theme)) {
                    rulesHTML += '<li><strong>Theme:</strong> ' + event.theme.join(', ') + '</li>';
                } else {
                    rulesHTML += '<li><strong>Theme:</strong> ' + event.theme + '</li>';
                }
            }
            
            // Add canvas size if available
            if (event.canvasSize) {
                rulesHTML += '<li><strong>Canvas Size:</strong> ' + event.canvasSize + '</li>';
            }
            
            // Add duration if available
            if (event.duration) {
                rulesHTML += '<li><strong>Duration:</strong> ' + event.duration + '</li>';
            }
            
            // Add venue if available
            if (event.venue) {
                rulesHTML += '<li><strong>Venue:</strong> ' + event.venue + '</li>';
            }
            
            // Add team size if available
            if (event.teamSize) {
                rulesHTML += '<li><strong>Team Size:</strong> ' + event.teamSize + '</li>';
            }
            
            // Add date if available
            if (event.date) {
                rulesHTML += '<li><strong>Date:</strong> ' + event.date + '</li>';
            }
            
            // Add submission format if available
            if (event.submissionFormat) {
                rulesHTML += '<li><strong>Submission Format:</strong> ' + event.submissionFormat + '</li>';
            }
            
            // Add description if available
            if (event.description) {
                rulesHTML += '<li><strong>Description:</strong> ' + event.description + '</li>';
            }
            
            // Add objective if available
            if (event.objective) {
                rulesHTML += '<li><strong>Objective:</strong> ' + event.objective + '</li>';
            }
            
            // Add rounds structure if available
            if (event.rounds && Array.isArray(event.rounds)) {
                rulesHTML += '<li><strong>Competition Rounds:</strong></li>';
                event.rounds.forEach((round, index) => {
                    rulesHTML += `<li class="nested-item"><strong>${round.name || `Round ${index + 1}`}:</strong>`;
                    if (round.participants) rulesHTML += ` Participants: ${round.participants}.`;
                    if (round.objective) rulesHTML += ` ${round.objective}.`;
                    if (round.structure) rulesHTML += ` ${round.structure}.`;
                    if (round.cutOff) rulesHTML += ` ${round.cutOff}.`;
                    if (round.lifelines) rulesHTML += ` ${round.lifelines}.`;
                    rulesHTML += '</li>';
                });
            }
            
            // Add competition structure if available
            if (event.competitionStructure && Array.isArray(event.competitionStructure)) {
                rulesHTML += '<li><strong>Competition Structure:</strong></li>';
                event.competitionStructure.forEach((round, index) => {
                    rulesHTML += `<li class="nested-item"><strong>${round.round || `Round ${index + 1}`}:</strong>`;
                    if (round.theme) rulesHTML += ` Theme: ${round.theme}.`;
                    if (round.duration) rulesHTML += ` Duration: ${round.duration}.`;
                    if (round.objective) rulesHTML += ` ${round.objective}.`;
                    if (round.note) rulesHTML += ` ${round.note}`;
                    if (round.details && Array.isArray(round.details)) {
                        round.details.forEach(detail => {
                            rulesHTML += `<li class="nested-item-sub">${detail}</li>`;
                        });
                    }
                    rulesHTML += '</li>';
                });
            }
            
            // Add screening round info if available (for dance)
            if (event.screeningRound) {
                rulesHTML += '<li><strong>Screening Round (For UGI Students):</strong></li>';
                rulesHTML += `<li class="nested-item">Date: ${event.screeningRound.date}</li>`;
                rulesHTML += `<li class="nested-item">Duration: ${event.screeningRound.duration}</li>`;
                rulesHTML += `<li class="nested-item">Note: ${event.screeningRound.note}</li>`;
            }
            
            // Add solo/group dance info if available
            if (event.soloDance) {
                rulesHTML += '<li><strong>Solo Dance Competition:</strong></li>';
                rulesHTML += `<li class="nested-item">Date: ${event.soloDance.date}</li>`;
                rulesHTML += `<li class="nested-item">Time Limit: ${event.soloDance.timeLimit}</li>`;
                if (event.soloDance.note) {
                    rulesHTML += `<li class="nested-item">${event.soloDance.note}</li>`;
                }
            }
            
            if (event.groupDance) {
                rulesHTML += '<li><strong>Group Dance Competition:</strong></li>';
                rulesHTML += `<li class="nested-item">Date: ${event.groupDance.date}</li>`;
                rulesHTML += `<li class="nested-item">Time Limit: ${event.groupDance.timeLimit}</li>`;
                rulesHTML += `<li class="nested-item">Team Size: ${event.groupDance.teamSize}</li>`;
            }
            
            // Add format if available
            if (event.format) {
                rulesHTML += '<li><strong>Format:</strong> ' + event.format + '</li>';
            }
            
            // Add time limit if available
            if (event.timeLimit) {
                rulesHTML += '<li><strong>Time Limit:</strong> ' + event.timeLimit + '</li>';
            }
            
            // Add registration info if available
            if (event.registration && Array.isArray(event.registration)) {
                rulesHTML += '<li><strong>Registration:</strong></li>';
                event.registration.forEach(reg => {
                    rulesHTML += `<li class="nested-item">${reg}</li>`;
                });
            }
            
            // Add submission requirement if available
            if (event.submissionRequirement) {
                rulesHTML += '<li><strong>Submission Requirement:</strong> ' + event.submissionRequirement + '</li>';
            }
            
            // Add event type if available
            if (event.eventType) {
                rulesHTML += '<li><strong>Event Type:</strong> ' + event.eventType + '</li>';
            }
            
            // Add event duration if available
            if (event.eventDuration) {
                rulesHTML += '<li><strong>Event Duration:</strong> ' + event.eventDuration + '</li>';
            }
            
            // Add result declaration if available
            if (event.resultDeclaration) {
                rulesHTML += '<li><strong>Result Declaration:</strong> ' + event.resultDeclaration + '</li>';
            }
            
            // Add submission deadline if available
            if (event.submissionDeadline) {
                rulesHTML += '<li><strong>Submission Deadline:</strong> ' + event.submissionDeadline + '</li>';
            }
            
            // Add team composition if available
            if (event.teamComposition) {
                rulesHTML += '<li><strong>Team Composition:</strong> ' + event.teamComposition + '</li>';
            }
            
            // Add eligibility if available
            if (event.eligibility) {
                rulesHTML += '<li><strong>Eligibility:</strong> ' + event.eligibility + '</li>';
            }
            
            // Add focus if available
            if (event.focus) {
                rulesHTML += '<li><strong>Focus:</strong> ' + event.focus + '</li>';
            }
            
            // Add technology restriction if available
            if (event.technologyRestriction) {
                rulesHTML += '<li><strong>Technology Restriction:</strong> ' + event.technologyRestriction + '</li>';
            }
            
            // Add internet use if available
            if (event.internetUse) {
                rulesHTML += '<li><strong>Internet Use:</strong> ' + event.internetUse + '</li>';
            }
            
            // Add equipment if available
            if (event.equipment) {
                rulesHTML += '<li><strong>Equipment:</strong> ' + event.equipment + '</li>';
            }
            
            // Add coding tool if available
            if (event.codingTool) {
                rulesHTML += '<li><strong>Coding Tool:</strong> ' + event.codingTool + '</li>';
            }
            
            // Add submission format if available
            if (event.submissionFormat) {
                rulesHTML += '<li><strong>Submission Format:</strong> ' + event.submissionFormat + '</li>';
            }
            
            // Add introduction if available
            if (event.introduction) {
                rulesHTML += '<li><strong>Introduction:</strong> ' + event.introduction + '</li>';
            }
            
            // Add theme title if available
            if (event.themeTitle) {
                rulesHTML += '<li><strong>Theme Title:</strong> ' + event.themeTitle + '</li>';
            }
            
            // Add storyline if available
            if (event.storyline) {
                rulesHTML += '<li><strong>Storyline:</strong> ' + event.storyline + '</li>';
            }
            
            // Add mission if available
            if (event.mission && Array.isArray(event.mission)) {
                rulesHTML += '<li><strong>Your Mission:</strong></li>';
                event.mission.forEach(mission => {
                    rulesHTML += `<li class="nested-item">${mission}</li>`;
                });
            }
            
            // Add stages if available
            if (event.stages && Array.isArray(event.stages)) {
                rulesHTML += '<li><strong>Stages:</strong></li>';
                event.stages.forEach((stage, index) => {
                    rulesHTML += `<li class="nested-item"><strong>${stage.stage || `Stage ${index + 1}`}:</strong> ${stage.description || ''}`;
                    if (stage.note) rulesHTML += ` ${stage.note}`;
                    rulesHTML += '</li>';
                });
            }
            
            // Add categories if available
            if (event.categories) {
                rulesHTML += '<li><strong>Categories:</strong> ' + event.categories + '</li>';
            }
            
            // Add performance duration if available
            if (event.performanceDuration) {
                rulesHTML += '<li><strong>Performance Duration:</strong></li>';
                if (event.performanceDuration.solo) {
                    rulesHTML += `<li class="nested-item">Solo: ${event.performanceDuration.solo}</li>`;
                }
                if (event.performanceDuration.group) {
                    rulesHTML += `<li class="nested-item">Group: ${event.performanceDuration.group}</li>`;
                }
                if (event.performanceDuration.screening) {
                    rulesHTML += `<li class="nested-item">Screening: ${event.performanceDuration.screening}</li>`;
                }
            }
            
            // Add group size if available
            if (event.groupSize) {
                rulesHTML += '<li><strong>Group Size:</strong> ' + event.groupSize + '</li>';
            }
            
            // Add rounds info if available
            if (event.rounds && typeof event.rounds === 'string') {
                rulesHTML += '<li><strong>Rounds:</strong> ' + event.rounds + '</li>';
            }
            
            // Add tournament structure if available
            if (event.tournamentStructure && Array.isArray(event.tournamentStructure)) {
                rulesHTML += '<li style="margin-top: var(--spacing-sm);"><strong>Tournament Structure:</strong></li>';
                event.tournamentStructure.forEach((stage, index) => {
                    rulesHTML += `<li style="padding-left: var(--spacing-lg); margin-top: var(--spacing-xs);"><strong>${stage.stage || `Stage ${index + 1}`}:</strong> ${stage.description || ''}</li>`;
                });
            }
            
            // Add lobby size if available
            if (event.lobbySize) {
                rulesHTML += '<li><strong>Lobby Size:</strong> ' + event.lobbySize + '</li>';
            }
            
            // Add points system if available
            if (event.pointsSystem) {
                rulesHTML += '<li><strong>Points System:</strong></li>';
                if (event.pointsSystem.perKill) {
                    rulesHTML += `<li class="nested-item">${event.pointsSystem.perKill}</li>`;
                }
                if (event.pointsSystem.ranking) {
                    rulesHTML += '<li class="nested-item"><strong>Ranking Points:</strong></li>';
                    Object.keys(event.pointsSystem.ranking).forEach(rank => {
                        rulesHTML += `<li class="nested-item-sub">${rank}: ${event.pointsSystem.ranking[rank]}</li>`;
                    });
                }
            }
            
            // Add rules
            if (event.rules && event.rules.length > 0) {
                rulesHTML += '<li><strong>Rules and Guidelines:</strong></li>';
                rulesHTML += event.rules.map(rule => `<li class="nested-item">${rule}</li>`).join('');
            }
            
            rulesList.innerHTML = rulesHTML;
        }
        
        // Prize section removed - no longer updating "Prizes Upto"
        
        // Update judging criteria if available
        if (event.judging && event.judging.length > 0) {
            // Check if judging section already exists
            let existingJudgingSection = null;
            document.querySelectorAll('.content-section h2').forEach(h2 => {
                if (h2.textContent.includes('Judging')) {
                    existingJudgingSection = h2.parentElement;
                }
            });
            
            if (existingJudgingSection) {
                // Update existing section
                const judgingList = existingJudgingSection.querySelector('ul');
        if (judgingList) {
            judgingList.innerHTML = event.judging.map(criteria => `<li>${criteria}</li>`).join('');
        }
            } else {
                // Create new section before Contact Coordinators
                const contentSection = document.querySelector('.event-content');
                const coordinatorsSection = document.querySelector('.content-section h2');
                if (contentSection) {
                    const judgingHTML = `
                        <div class="content-section fade-in">
                            <h2>Judging Criteria</h2>
                            <ul>
                                ${event.judging.map(criteria => `<li>${criteria}</li>`).join('')}
                            </ul>
                        </div>
                    `;
                    // Insert before Contact Coordinators section
                    if (coordinatorsSection && coordinatorsSection.textContent.includes('Contact')) {
                        coordinatorsSection.parentElement.insertAdjacentHTML('beforebegin', judgingHTML);
                    } else {
                        contentSection.insertAdjacentHTML('beforeend', judgingHTML);
                    }
                }
            }
        }
        
        // Update coordinators with footer contact data
        const coordinatorsGrid = document.getElementById('coordinatorsGrid');
        if (coordinatorsGrid) {
            // Use footer contact data instead of event-specific coordinators
            coordinatorsGrid.innerHTML = `
                <div class="coordinator-card">
                    <h3>Himanshu Mishra</h3>
                    <p><strong>UCER</strong></p>
                    <p>+91 89601 94225</p>
                </div>
                <div class="coordinator-card">
                    <h3>Prakhar Agrahari</h3>
                    <p><strong>UIT</strong></p>
                    <p>+91 96160 62606</p>
                </div>
            `;
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


