const secondHand = document.querySelector('.second-hand');
const minuteHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');


function setDate() {
    // Grabs current date and time
    const now = new Date();
    // Grabbing the current seconds
    const seconds = now.getSeconds();
    const secondsDegrees = ((seconds / 60) * 360) + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
    // Grabbing the current minutes
    const minutes = now.getMinutes();
    const miuntesDegrees = ((minutes / 60) * 360) + 90;
    minuteHand.style.transform = `rotate(${miuntesDegrees}deg)`;
    // Grabbing the current hours
    const hours = now.getHours();
    const hoursDegrees = ((hours / 12) * 360) + 90;
    hourHand.style.transform = `rotate(${hoursDegrees}deg)`;
}

setInterval(setDate, 1000);