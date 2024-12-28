function playSound(event) {
    let keyCode;

    // Determine the key code based on the event type
    if (event.type === 'keydown') {
        keyCode = event.keyCode; // keyboard element
    } 
    else {
        keyCode = this.dataset.key // clicked element
    } 

    // Select the audio and keys based on the key code
    const audio = document.querySelector(`audio[data-key="${keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${keyCode}"]`);
    if (!audio) return;     // if no audio, leave function

    audio.currentTime = 0;  // Reset audio playback
    audio.play();

    if (key) key.classList.add('playing'); // if key exists, add 'playing' class from CSS file
} // end playSound

function remove(event) {
    if(event.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

// Add events listeners for key elements
function setup() {
    const keys = document.querySelectorAll('.key');

    keys.forEach ((key) => {
        key.addEventListener('click', playSound);       // Handle mouse clicks
        key.addEventListener('transitionend', remove);  // Cleanup after transition
    });

    window.addEventListener('keydown', playSound);      // Global event listeners for keydown elements
}

// Initialize event listeners
setup();
