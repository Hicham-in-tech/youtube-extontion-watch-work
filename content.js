// Content script for keyboard shortcuts and additional functionality

// Listen for keyboard shortcuts
document.addEventListener('keydown', function(event) {
    // Alt + P to toggle Picture-in-Picture
    if (event.altKey && event.key === 'p') {
        event.preventDefault();
        togglePictureInPicture();
    }
});

// Function to toggle Picture-in-Picture
function togglePictureInPicture() {
    const videos = document.querySelectorAll('video');
    
    if (videos.length === 0) {
        console.log('No video found on this page');
        return;
    }
    
    // If PiP is already active, exit it
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
        return;
    }
    
    // Find the best video to use
    let targetVideo = null;
    
    // Priority 1: Currently playing video
    for (let video of videos) {
        if (!video.paused) {
            targetVideo = video;
            break;
        }
    }
    
    // Priority 2: Visible video with largest area
    if (!targetVideo) {
        let maxArea = 0;
        for (let video of videos) {
            const rect = video.getBoundingClientRect();
            const area = rect.width * rect.height;
            if (area > maxArea) {
                maxArea = area;
                targetVideo = video;
            }
        }
    }
    
    // Fallback: First video
    if (!targetVideo) {
        targetVideo = videos[0];
    }
    
    // Request Picture-in-Picture
    targetVideo.requestPictureInPicture()
        .then(() => {
            console.log('Picture-in-Picture activated');
            
            // Optional: Show a temporary notification
            showNotification('Picture-in-Picture activated');
        })
        .catch((error) => {
            console.error('PiP error:', error);
            showNotification('Unable to activate PiP: ' + error.message, true);
        });
}

// Function to show temporary notification
function showNotification(message, isError = false) {
    // Remove existing notification if any
    const existingNotif = document.getElementById('pip-extension-notification');
    if (existingNotif) {
        existingNotif.remove();
    }
    
    // Create notification element
    const notification = document.createElement('div');
    notification.id = 'pip-extension-notification';
    notification.textContent = message;
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${isError ? '#ef4444' : '#10b981'};
        color: white;
        padding: 16px 24px;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
        z-index: 999999;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
        font-size: 14px;
        font-weight: 500;
        animation: slideIn 0.3s ease;
    `;
    
    // Add animation styles
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from {
                transform: translateX(400px);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(notification);
    
    // Remove notification after 2 seconds
    setTimeout(() => {
        notification.style.animation = 'slideIn 0.3s ease reverse';
        setTimeout(() => {
            notification.remove();
        }, 300);
    }, 2000);
}

// Listen for messages from popup
chrome.runtime.onMessage?.addListener((request, sender, sendResponse) => {
    if (request.action === 'togglePiP') {
        togglePictureInPicture();
        sendResponse({ success: true });
    }
});
