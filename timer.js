const startingMinutes = 1;
let time = startingMinutes * 60;

const countDownEl = document.getElementById("countdown");

setInterval(updateCountdown, 1000);


    


function updateCountdown() {
    const minutes = Math.floor(time / 60);
    let seconds = time % 60;
    countDownEl.innerHTML = (minutes + seconds);
    time --;
    if (time < 0 ){
        time = 0;
    }
        



}