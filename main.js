function setDate(){
    let now = new Date();

    let seconds = now.getSeconds();
    let secondsDegrees = ((seconds / 60) * 360) + 90;
    let secondHand = document.querySelector('.second-hand');
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`

    let minutes = now.getMinutes();
    let minutesDegrees = ((minutes / 60) * 360) + 90;
    let minuteHand = document.querySelector('.min-hand');
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`

    let hours = now.getHours();
    console.log(hours);
    let hourDegrees = ((hours / 12) * 360) + 90;
    let hourHand = document.querySelector('.hour-hand');
    hourHand.style.transform = `rotate(${hourDegrees}deg)` 

}

setInterval(setDate, 1000);