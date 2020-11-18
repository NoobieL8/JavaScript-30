function playSound(e) {
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`)
    console.log(audio);
    if(!audio) return; // stops the function from running all together

    audio.play(); // plays the audio element on that specific key.
    audio.currentTime = 0; // rewind to the start
    key.classList.add('playing');
    console.log(key);
}

function removeTransition(e) {
    if(e.propertyName !== 'transform') {
        return; // skip it if it's not a transform
    }
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => {
    key.addEventListener('transitionend', removeTransition);
});

window.addEventListener('keydown', playSound);