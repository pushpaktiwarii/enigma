// ============================================
// Gallery Page - Image/Video Loading
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    // Images and Videos from assests/enigma xii/ folder (excluding sponsor images)
    const galleryItems = [
        // Images (only ENIGMA XII gallery images, not sponsors)
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
    
    // Load gallery items
    if (galleryItems.length > 0 && galleryGrid) {
        galleryItems.forEach((item, index) => {
            const galleryItem = document.createElement('div');
            galleryItem.className = 'gallery-item hover-color-overlay';
            galleryItem.style.display = 'block';
            galleryItem.style.opacity = '1';
            
            if (item.type === 'video') {
                galleryItem.classList.add('video-item');
                const video = document.createElement('video');
                video.src = `assests/enigma xii/${item.src}`;
                if (item.poster) {
                    video.poster = `assests/enigma xii/${item.poster}`;
                }
                video.muted = true;
                video.setAttribute('playsinline', '');
                video.setAttribute('preload', 'metadata');
                galleryItem.appendChild(video);
                
                const overlay = document.createElement('div');
                overlay.className = 'gallery-overlay';
                overlay.innerHTML = '<span class="gallery-category">Video</span>';
                galleryItem.appendChild(overlay);
            } else {
                const img = document.createElement('img');
                img.src = `assests/enigma xii/${item.src}`;
                img.alt = 'ENIGMA XII Gallery';
                img.loading = 'lazy';
                img.onerror = function() {
                    console.log('Failed to load image:', this.src);
                    this.style.display = 'none';
                };
                galleryItem.appendChild(img);
            }
            
            galleryGrid.appendChild(galleryItem);
            
            // Trigger fade-in animation
            setTimeout(() => {
                galleryItem.classList.add('is-visible');
            }, index * 50);
        });
    } else {
        console.log('Gallery grid not found or no items to load');
    }
    
    // Video play on hover
    const videoItems = document.querySelectorAll('.gallery-item.video-item video');
    
    videoItems.forEach(video => {
        const galleryItem = video.closest('.gallery-item');
        
        galleryItem.addEventListener('mouseenter', function() {
            video.play().catch(err => {
                console.log('Video autoplay failed:', err);
            });
        });
        
        galleryItem.addEventListener('mouseleave', function() {
            video.pause();
            video.currentTime = 0;
        });
    });
});


