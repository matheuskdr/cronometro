let minutesEl = document.querySelector('.minutes');
let secondsEl = document.querySelector('.seconds');
let millisecondsEl = document.querySelector('.milliseconds');
let startBtn = document.querySelector('.start');
let stopBtn = document.querySelector('.stop');
let resetBtn = document.querySelector('.reset');

let milliseconds = 0;
let seconds = 0;
let minutes = 0;
let interval;

function millisecondsF() {

    if (milliseconds <= 99) {
        milliseconds++;
        millisecondsEl.innerHTML = milliseconds;
    } else {
        milliseconds = 0;
        secondsF();
    }

}

function secondsF() {
    seconds++;
    if (seconds < 10) {

        secondsEl.innerHTML = '0' + seconds;
    } else {
        secondsEl.innerHTML = seconds;
    }
    if (seconds == 59) {
        seconds = '0'
        secondsEl.innerHTML = '00';
        minutesF();
    }
}

function minutesF() {
    minutes++;
    if (minutes < 10) {
        minutesEl.innerHTML = '0' + minutes;
    } else {
        minutesEl.innerHTML = minutes;
    }

}

function start() {
    interval = setInterval(() => {
        millisecondsF()
    }, 10);

}

function stopF() {
    clearInterval(interval);
}

function resetF() {
    clearInterval(interval);
    milliseconds = 0;
    seconds = 0;
    minutes = 0;

    millisecondsEl.innerHTML = '00';
    secondsEl.innerHTML = '00';
    minutesEl.innerHTML = '00';

}