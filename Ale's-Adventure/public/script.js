
// Get elements
const videoPopup = document.getElementById('video-popup');
const closePopup = document.getElementById('close-popup');
const popupVideo = document.getElementById('popup-video');

// Show the pop-up and play the video when the page loads
window.addEventListener('load', () => {
    videoPopup.style.display = 'flex'; // Show the pop-up
    popupVideo.play(); // Automatically play the video
});

// Close the pop-up and stop the video
closePopup.addEventListener('click', () => {
    videoPopup.style.display = 'none'; // Hide the pop-up
    popupVideo.pause(); // Stop the video
    popupVideo.currentTime = 0; // Reset the video to the beginning
});

// Countdown to February 14th, 2025
const targetDate = new Date('February 14, 2025 00:00:00').getTime();

const countdown = setInterval(() => {
    const now = new Date().getTime();
    const timeLeft = targetDate - now;

    // Calculate days, hours, minutes, seconds
    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    // Update the countdown
    document.getElementById('days').textContent = days;
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;

    // If the countdown is over, display a message
    if (timeLeft < 0) {
        clearInterval(countdown);
        document.getElementById('countdown').innerHTML = '<h2>Happy Valentine\'s Day!</h2>';
    }
}, 1000);
