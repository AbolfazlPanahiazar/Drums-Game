// Play function
function playSound(event) {
    const sound = document.querySelector(`audio[data-key="${event.keyCode}"]`);
    sound.currentTime = 0;
    sound.play();
}

// Change style
function buttonStyler(event) {
    const div = document.querySelector(`.key[data-key="${event.keyCode}"`);
    div.classList.add('play');
    setTimeout(() => {
        div.classList.remove('play');
    }, 100);
}

// What happens to play
window.addEventListener('keydown', playSound);
window.addEventListener('keydown', buttonStyler);