// ============================================
// Gallery Page - Optimized Image/Video Loading with Lazy Loading
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Images from assets/enigma xii/ folder
    // Images are in WebP format for better performance and smaller file sizes
    // Starting from 1.webp, 2.webp, etc. in order
    const galleryItems = [
        // Numbered images starting from 1 (converted from JPG to WebP)
        { type: 'image', src: '1.webp' },
        { type: 'image', src: '2.webp' },
        { type: 'image', src: '3.webp' },
        { type: 'image', src: '4.webp' },
        { type: 'image', src: '5.webp' },
        { type: 'image', src: '6.webp' },
        { type: 'image', src: '7.webp' },
        { type: 'image', src: '8.webp' },
        { type: 'image', src: '9.webp' },
        { type: 'image', src: '10.webp' },
        { type: 'image', src: '11.webp' },
        { type: 'image', src: '12.webp' },
        { type: 'image', src: '13.webp' },
        { type: 'image', src: '14.webp' },
        { type: 'image', src: '15.webp' },
        { type: 'image', src: '16.webp' },
        { type: 'image', src: '17.webp' },
        { type: 'image', src: '18.webp' },
        // Additional existing WebP images
        { type: 'image', src: '1000079688.webp' },
        { type: 'image', src: '1000079689.webp' },
        { type: 'image', src: '1000079690.webp' },
        { type: 'image', src: '1000079692.webp' },
        { type: 'image', src: '1000079693.webp' },
        { type: 'image', src: '1000079694.webp' },
        { type: 'image', src: '1000079697.webp' },
        { type: 'image', src: '1000079698.webp' },
        { type: 'image', src: '1000079700.webp' },
        { type: 'image', src: '1000079701.webp' },
        { type: 'image', src: '1000079702.webp' },
        { type: 'image', src: '1000079703.webp' },
        { type: 'image', src: '1000079704.webp' },
        { type: 'image', src: '1000079705.webp' },
        { type: 'image', src: '1000079708.webp' },
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
        
        // Only images now - videos removed
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
        if (img) {
            imageObserver.observe(galleryItem);
        }
    }
});


