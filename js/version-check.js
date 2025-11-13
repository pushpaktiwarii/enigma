// ============================================
// Auto Version Check & Refresh System
// ============================================

(function() {
    'use strict';
    
    // Version number - Update this when you deploy new changes
    const CURRENT_VERSION = '1.0.1';
    const VERSION_KEY = 'enigma_site_version';
    const CHECK_INTERVAL = 5 * 60 * 1000; // Check every 5 minutes
    const VERSION_FILE = '/version.json'; // Optional: server-side version file
    
    let checkInterval = null;
    let refreshBanner = null;
    
    // Create refresh notification banner
    function createRefreshBanner() {
        if (refreshBanner) return; // Already exists
        
        refreshBanner = document.createElement('div');
        refreshBanner.id = 'refresh-banner';
        refreshBanner.style.cssText = `
            position: fixed;
            bottom: 20px;
            right: 20px;
            background: linear-gradient(135deg, #00FFFF, #FF00FF);
            color: #000;
            padding: 15px 20px;
            border-radius: 10px;
            box-shadow: 0 4px 20px rgba(0, 255, 255, 0.5);
            z-index: 10000;
            font-family: 'Montserrat', sans-serif;
            font-weight: 600;
            font-size: 14px;
            max-width: 350px;
            animation: slideUp 0.3s ease-out;
            border: 2px solid #00FFFF;
        `;
        
        refreshBanner.innerHTML = `
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
                <span style="font-size: 20px;">🔄</span>
                <span>New version available!</span>
            </div>
            <div style="display: flex; gap: 10px;">
                <button id="refresh-now-btn" style="
                    background: #000;
                    color: #00FFFF;
                    border: 2px solid #00FFFF;
                    padding: 8px 16px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 12px;
                    transition: all 0.3s;
                ">Refresh Now</button>
                <button id="refresh-later-btn" style="
                    background: transparent;
                    color: #000;
                    border: 2px solid #000;
                    padding: 8px 16px;
                    border-radius: 5px;
                    cursor: pointer;
                    font-weight: 600;
                    font-size: 12px;
                    transition: all 0.3s;
                ">Later</button>
            </div>
        `;
        
        // Add styles
        const style = document.createElement('style');
        style.textContent = `
            @keyframes slideUp {
                from {
                    transform: translateY(100px);
                    opacity: 0;
                }
                to {
                    transform: translateY(0);
                    opacity: 1;
                }
            }
            #refresh-now-btn:hover {
                background: #00FFFF;
                color: #000;
                transform: scale(1.05);
            }
            #refresh-later-btn:hover {
                background: rgba(0, 0, 0, 0.1);
                transform: scale(1.05);
            }
        `;
        document.head.appendChild(style);
        
        document.body.appendChild(refreshBanner);
        
        // Button handlers
        document.getElementById('refresh-now-btn').addEventListener('click', function() {
            refreshPage();
        });
        
        document.getElementById('refresh-later-btn').addEventListener('click', function() {
            hideRefreshBanner();
            // Check again in 2 minutes
            setTimeout(checkVersion, 2 * 60 * 1000);
        });
    }
    
    function hideRefreshBanner() {
        if (refreshBanner) {
            refreshBanner.style.animation = 'slideUp 0.3s ease-out reverse';
            setTimeout(() => {
                if (refreshBanner && refreshBanner.parentNode) {
                    refreshBanner.parentNode.removeChild(refreshBanner);
                }
                refreshBanner = null;
            }, 300);
        }
    }
    
    function refreshPage() {
        // Clear all caches and reload
        if ('serviceWorker' in navigator) {
            navigator.serviceWorker.getRegistrations().then(function(registrations) {
                for(let registration of registrations) {
                    registration.unregister();
                }
            });
        }
        
        // Clear session storage (optional - comment out if you want to keep it)
        // sessionStorage.clear();
        
        // Force reload
        window.location.reload(true);
    }
    
    // Check version from localStorage
    function checkVersion() {
        const storedVersion = localStorage.getItem(VERSION_KEY);
        
        if (!storedVersion) {
            // First time - store current version
            localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
            return;
        }
        
        if (storedVersion !== CURRENT_VERSION) {
            // Version changed - auto refresh immediately
            console.log('🔄 New version detected! Current:', CURRENT_VERSION, 'Stored:', storedVersion);
            console.log('🔄 Auto-refreshing page...');
            
            // Update stored version
            localStorage.setItem(VERSION_KEY, CURRENT_VERSION);
            
            // Small delay to show console message, then refresh
            setTimeout(() => {
                refreshPage();
            }, 500);
        } else {
            // Same version - check server for updates (optional)
            checkServerVersion();
        }
    }
    
    // Optional: Check server for version updates
    function checkServerVersion() {
        // Try to fetch version.json from server
        fetch(VERSION_FILE + '?t=' + Date.now(), {
            cache: 'no-cache',
            method: 'GET'
        })
        .then(response => {
            if (response.ok) {
                return response.json();
            }
            throw new Error('Version file not found');
        })
        .then(data => {
            if (data.version && data.version !== CURRENT_VERSION) {
                console.log('🔄 Server has new version:', data.version);
                // Update local version and auto refresh
                localStorage.setItem(VERSION_KEY, data.version);
                console.log('🔄 Auto-refreshing page...');
                setTimeout(() => {
                    refreshPage();
                }, 500);
            }
        })
        .catch(error => {
            // Version file doesn't exist or error - that's okay
            // We'll rely on localStorage version check
        });
    }
    
    // Initialize
    function init() {
        // Check immediately
        checkVersion();
        
        // Check periodically
        checkInterval = setInterval(checkVersion, CHECK_INTERVAL);
        
        // Also check when page becomes visible (user switches back to tab)
        document.addEventListener('visibilitychange', function() {
            if (!document.hidden) {
                checkVersion();
            }
        });
        
        // Check on focus
        window.addEventListener('focus', checkVersion);
    }
    
    // Start when DOM is ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
    
    // Export for manual refresh
    window.enigmaVersionCheck = {
        check: checkVersion,
        refresh: refreshPage,
        version: CURRENT_VERSION
    };
    
})();

