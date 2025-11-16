// ============================================
// Gallery Page - Optimized Image/Video Loading with Lazy Loading
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Images and Videos from assets/enigma xii/ folder
    const galleryItems = [
        // Images
        { type: 'image', src: '1000079685.jpg' },
        { type: 'image', src: '1000079687.jpg' },
        { type: 'image', src: '1000079688.jpg' },
        { type: 'image', src: '1000079689.jpg' },
        { type: 'image', src: '1000079690.jpg' },
        { type: 'image', src: '1000079691.jpg' },
        { type: 'image', src: '1000079692.jpg' },
        { type: 'image', src: '1000079693.jpg' },
        { type: 'image', src: '1000079694.jpg' },
        { type: 'image', src: '1000079697.jpg' },
        { type: 'image', src: '1000079698.jpg' },
        { type: 'image', src: '1000079700.jpg' },
        { type: 'image', src: '1000079701.jpg' },
        { type: 'image', src: '1000079702.jpg' },
        { type: 'image', src: '1000079703.jpg' },
        { type: 'image', src: '1000079704.jpg' },
        { type: 'image', src: '1000079705.jpg' },
        { type: 'image', src: '1000079706.jpg' },
        { type: 'image', src: '1000079708.jpg' },
        { type: 'image', src: '1000079710.jpg' },
        { type: 'image', src: '1000079711.jpg' },
        { type: 'image', src: '1000079714.jpg' },
        // Videos
        { type: 'video', src: '1000079677.mp4' },
        { type: 'video', src: '1000079681.mp4' },
    ];
    
    const galleryGrid = document.getElementById('galleryGrid');
    
    if (!galleryGrid) {
        console.log('Gallery grid not found');
        return;
    }
    
    // Create simple loading placeholder
    function createPlaceholder() {
        const placeholder = document.createElement('div');
        placeholder.className = 'gallery-placeholder';
        return placeholder;
    }
    
    // Create gallery item with lazy loading
    function createGalleryItem(item, index) {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        galleryItem.setAttribute('data-index', index);
        
        if (item.type === 'video') {
            galleryItem.classList.add('video-item');
            // Create placeholder first
            const placeholder = createPlaceholder();
            galleryItem.appendChild(placeholder);
            
            // Load video only when visible
            const video = document.createElement('video');
            video.setAttribute('data-src', `assets/enigma xii/${item.src}`);
            video.muted = true;
            video.setAttribute('playsinline', '');
            video.setAttribute('preload', 'none'); // Don't preload videos
            video.style.display = 'none';
            galleryItem.appendChild(video);
            
            const overlay = document.createElement('div');
            overlay.className = 'gallery-overlay';
            overlay.innerHTML = '<span class="gallery-category">Video</span>';
            galleryItem.appendChild(overlay);
        } else {
            // Create placeholder first
            const placeholder = createPlaceholder();
            galleryItem.appendChild(placeholder);
            
            // Create image with data-src for lazy loading
            const img = document.createElement('img');
            img.setAttribute('data-src', `assets/enigma xii/${item.src}`);
            img.alt = 'ENIGMA XII Gallery';
            img.style.display = 'none';
            img.onerror = function() {
                console.log('Failed to load image:', this.src);
                this.style.display = 'none';
                const placeholder = galleryItem.querySelector('.gallery-placeholder');
                if (placeholder) {
                    placeholder.innerHTML = '<div class="error-message">Failed to load</div>';
                }
            };
            img.onload = function() {
                const placeholder = galleryItem.querySelector('.gallery-placeholder');
                if (placeholder) {
                    placeholder.style.opacity = '0';
                    setTimeout(() => {
                    placeholder.style.display = 'none';
                    }, 200);
                }
                this.style.display = 'block';
                this.classList.add('loaded');
                galleryItem.classList.add('loaded');
            };
            galleryItem.appendChild(img);
        }
        
        return galleryItem;
    }
    
    // Create all gallery items with placeholders
    galleryItems.forEach((item, index) => {
        const galleryItem = createGalleryItem(item, index);
        galleryGrid.appendChild(galleryItem);
    });
    
    // Preload first 6 visible images immediately
    const allGalleryItems = galleryGrid.querySelectorAll('.gallery-item');
    const preloadCount = Math.min(6, allGalleryItems.length);
    
    for (let i = 0; i < preloadCount; i++) {
        const galleryItem = allGalleryItems[i];
        const img = galleryItem.querySelector('img[data-src]');
        if (img) {
            const dataSrc = img.getAttribute('data-src');
            if (dataSrc) {
                const newImg = new Image();
                newImg.onload = function() {
                    img.src = dataSrc;
                    img.removeAttribute('data-src');
                    img.classList.add('loaded');
                    const placeholder = galleryItem.querySelector('.gallery-placeholder');
                    if (placeholder) {
                        placeholder.style.opacity = '0';
                        setTimeout(() => {
                            placeholder.style.display = 'none';
                        }, 200);
                    }
                    galleryItem.classList.add('loaded');
                };
                newImg.onerror = function() {
                    img.removeAttribute('data-src');
                    img.style.display = 'none';
                    const placeholder = galleryItem.querySelector('.gallery-placeholder');
                    if (placeholder) {
                        placeholder.innerHTML = '<div class="error-message">Failed to load</div>';
                    }
                };
                newImg.src = dataSrc;
            }
        }
    }
    
    // Intersection Observer for lazy loading remaining items
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const galleryItem = entry.target;
                const img = galleryItem.querySelector('img[data-src]');
                const video = galleryItem.querySelector('video[data-src]');
                
                if (img) {
                    // Load image
                    const dataSrc = img.getAttribute('data-src');
                    if (dataSrc) {
                        const newImg = new Image();
                        newImg.onload = function() {
                            img.src = dataSrc;
                            img.removeAttribute('data-src');
                            img.classList.add('loaded');
                            const placeholder = galleryItem.querySelector('.gallery-placeholder');
                            if (placeholder) {
                                placeholder.style.opacity = '0';
                                setTimeout(() => {
                                    placeholder.style.display = 'none';
                                }, 200);
                            }
                            galleryItem.classList.add('loaded');
                        };
                        newImg.onerror = function() {
                    img.removeAttribute('data-src');
                            img.style.display = 'none';
                            const placeholder = galleryItem.querySelector('.gallery-placeholder');
                            if (placeholder) {
                                placeholder.innerHTML = '<div class="error-message">Failed to load</div>';
                            }
                        };
                        newImg.src = dataSrc;
                    }
                    observer.unobserve(galleryItem);
                } else if (video) {
                    // Load video
                    video.src = video.getAttribute('data-src');
                    video.removeAttribute('data-src');
                    const placeholder = galleryItem.querySelector('.gallery-placeholder');
                    if (placeholder) {
                        placeholder.style.opacity = '0';
                        setTimeout(() => {
                        placeholder.style.display = 'none';
                        }, 200);
                    }
                    video.style.display = 'block';
                    video.classList.add('loaded');
                    galleryItem.classList.add('loaded');
                    observer.unobserve(galleryItem);
                }
            }
        });
    }, {
        rootMargin: '50px', // Start loading 50px before item is visible
        threshold: 0.01
    });
    
    // Observe remaining gallery items (skip first 6)
    for (let i = preloadCount; i < allGalleryItems.length; i++) {
        const galleryItem = allGalleryItems[i];
        const img = galleryItem.querySelector('img[data-src]');
        const video = galleryItem.querySelector('video[data-src]');
        if (img || video) {
            imageObserver.observe(galleryItem);
        }
    }
    
    // Video play on hover (only for loaded videos)
    galleryGrid.addEventListener('mouseenter', function(e) {
        const galleryItem = e.target.closest('.gallery-item.video-item');
        if (galleryItem && galleryItem.classList.contains('loaded')) {
            const video = galleryItem.querySelector('video');
            if (video && video.src) {
                video.play().catch(err => {
                    console.log('Video autoplay failed:', err);
                });
            }
        }
    }, true);
    
    galleryGrid.addEventListener('mouseleave', function(e) {
        const galleryItem = e.target.closest('.gallery-item.video-item');
        if (galleryItem) {
            const video = galleryItem.querySelector('video');
            if (video) {
                video.pause();
                video.currentTime = 0;
            }
        }
    }, true);
});


