// ============================================
// Registration Page - Simple Redirect
// ============================================

// Wait for DOM to be ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initRegistration);
} else {
    initRegistration();
}

function initRegistration() {
    console.log('🚀 Registration page initialized');
    
    // Registration is now handled by external form
    // No backend code needed - just redirect to external portal
    const registrationLink = document.querySelector('.registration-link');
    
    if (registrationLink) {
        registrationLink.addEventListener('click', function(e) {
            console.log('🔗 Redirecting to external registration portal...');
            // Link will open in new tab (target="_blank" in HTML)
        });
    }
    
    console.log('✅ Registration page ready');
}
