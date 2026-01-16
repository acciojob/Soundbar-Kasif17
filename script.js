//your JS code here. If required.
onst buttons = document.querySelectorAll('.btn');
const stopButton = document.querySelector('.stop');
let currentAudio = null;

buttons.forEach(button => {
    button.addEventListener('click', () => {
        const soundFile = button.getAttribute('data-sound');
        if (currentAudio) {
            currentAudio.pause();
        }
        currentAudio = new Audio(`sounds/${soundFile}`);
        currentAudio.play();
    });
});

stopButton.addEventListener('click', () => {
    if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0; // Reset to start
    }
});