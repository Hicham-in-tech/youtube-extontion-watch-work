document.addEventListener('DOMContentLoaded', function() {
    const pipButton = document.getElementById('pipButton');
    const statusDiv = document.getElementById('status');

    // Function to show status message
    function showStatus(message, isSuccess) {
        statusDiv.textContent = message;
        statusDiv.className = 'status show ' + (isSuccess ? 'success' : 'error');
        
        setTimeout(() => {
            statusDiv.classList.remove('show');
        }, 3000);
    }

    // Handle PiP button click
    pipButton.addEventListener('click', async function() {
        try {
            // Get the active tab
            const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
            
            // Execute script to enable PiP
            await chrome.scripting.executeScript({
                target: { tabId: tab.id },
                function: enablePictureInPicture
            });
            
            showStatus('✓ Picture-in-Picture activated!', true);
        } catch (error) {
            console.error('Error:', error);
            showStatus('✗ Error: ' + error.message, false);
        }
    });
});

// Function to be injected into the page
function enablePictureInPicture() {
    // Find all video elements
    const videos = document.querySelectorAll('video');
    
    if (videos.length === 0) {
        alert('No video found on this page!');
        return;
    }
    
    // Try to find a playing video or use the first one
    let targetVideo = null;
    
    for (let video of videos) {
        if (!video.paused) {
            targetVideo = video;
            break;
        }
    }
    
    // If no playing video, use the first visible video
    if (!targetVideo) {
        for (let video of videos) {
            const rect = video.getBoundingClientRect();
            if (rect.width > 0 && rect.height > 0) {
                targetVideo = video;
                break;
            }
        }
    }
    
    // Fallback to first video
    if (!targetVideo) {
        targetVideo = videos[0];
    }
    
    // Request Picture-in-Picture
    if (document.pictureInPictureElement) {
        document.exitPictureInPicture();
    } else {
        targetVideo.requestPictureInPicture()
            .then(() => {
                console.log('Picture-in-Picture activated successfully');
            })
            .catch((error) => {
                console.error('PiP error:', error);
                alert('Unable to activate Picture-in-Picture: ' + error.message);
            });
    }
}
