// ============================================
// Advanced Animations & Effects
// ============================================

// Intersection Observer for Fade/Slide-In animations
document.addEventListener('DOMContentLoaded', function() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, observerOptions);

    // Observe all elements with animation classes
    const animatedElements = document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right, .slide-up, .expand');
    animatedElements.forEach(el => {
        observer.observe(el);
    });
});

// Parallax Scroll Effect
document.addEventListener('DOMContentLoaded', function() {
    const parallaxElements = document.querySelectorAll('.parallax-element');
    
    if (window.innerWidth > 768) { // Only on desktop
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            
            parallaxElements.forEach(element => {
                const speed = element.dataset.speed || 0.5;
                const yPos = -(scrolled * speed);
                element.style.transform = `translate3d(0, ${yPos}px, 0)`;
            });
        });
    }
});

// Count Up Animation for Statistics
document.addEventListener('DOMContentLoaded', function() {
    const statNumbers = document.querySelectorAll('.stat-number');
    
    const countUp = (element, target, duration = 2000) => {
        let start = 0;
        const increment = target / (duration / 16);
        
        const updateCount = () => {
            start += increment;
            if (start < target) {
                element.textContent = Math.floor(start) + (target >= 1000 ? '+' : '');
                requestAnimationFrame(updateCount);
            } else {
                element.textContent = target + (target >= 1000 ? '+' : '');
            }
        };
        
        updateCount();
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && !entry.target.classList.contains('counted')) {
                const target = parseInt(entry.target.dataset.target);
                entry.target.classList.add('counted');
                countUp(entry.target, target);
            }
        });
    }, { threshold: 0.5 });

    statNumbers.forEach(stat => {
        observer.observe(stat);
    });
});

// Reveal Effect
document.addEventListener('DOMContentLoaded', function() {
    const revealContainers = document.querySelectorAll('.reveal-container');
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.2 });

    revealContainers.forEach(container => {
        observer.observe(container);
    });
});

// Custom Cursor & Mouse Follow Effect
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth > 768) { // Only on desktop
        const cursorDot = document.getElementById('cursorDot');
        const cursorOutline = document.getElementById('cursorOutline');
        
        if (cursorDot && cursorOutline) {
            let mouseX = 0;
            let mouseY = 0;
            let outlineX = 0;
            let outlineY = 0;

            // Mouse move event
            document.addEventListener('mousemove', function(e) {
                mouseX = e.clientX;
                mouseY = e.clientY;
                
                cursorDot.style.left = mouseX + 'px';
                cursorDot.style.top = mouseY + 'px';
            });

            // Lerp function for smooth following
            function lerp(start, end, factor) {
                return start + (end - start) * factor;
            }

            // Animate outline with lag
            function animate() {
                outlineX = lerp(outlineX, mouseX, 0.1);
                outlineY = lerp(outlineY, mouseY, 0.1);
                
                cursorOutline.style.left = outlineX + 'px';
                cursorOutline.style.top = outlineY + 'px';
                
                requestAnimationFrame(animate);
            }
            animate();

            // Hover effects on links and buttons
            const interactiveElements = document.querySelectorAll('a, button, .category-card, .btn');
            
            interactiveElements.forEach(element => {
                element.addEventListener('mouseenter', function() {
                    cursorOutline.classList.add('hover');
                });
                
                element.addEventListener('mouseleave', function() {
                    cursorOutline.classList.remove('hover');
                });
            });
        }
    }
});

// Hero Parallax Effect
document.addEventListener('DOMContentLoaded', function() {
    const heroSection = document.querySelector('.hero-section');
    const heroBackground = document.querySelector('.hero-background');
    
    if (heroSection && heroBackground && window.innerWidth > 768) {
        window.addEventListener('scroll', function() {
            const scrolled = window.pageYOffset;
            const heroHeight = heroSection.offsetHeight;
            
            if (scrolled < heroHeight) {
                const parallaxSpeed = 0.5;
                const yPos = -(scrolled * parallaxSpeed);
                heroBackground.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        });
    }
});



