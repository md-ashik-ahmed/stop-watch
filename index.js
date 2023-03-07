let timer_btn = document.getElementById('timer');
let start_btn = document.getElementById('start');
let stop_btn = document.getElementById('stop');
let reset_btn = document.getElementById('reset');

start_btn.addEventListener('click', start);
stop_btn.addEventListener('click', stop);
reset_btn.addEventListener('click', reset);

let seconds = 0;
let interval = null;

function timer (){
    seconds++;
    let hrs = Math.floor(seconds / 3600);
    let mins = Math.floor((seconds - (hrs * 3600)) /60);
    let secs = seconds % 60;

    if (secs < 10) secs = '0' + secs;
    if (mins < 10) mins = '0' + mins;
    if (hrs < 10) hrs = '0' + hrs;

    timer_btn.innerText = `${hrs}:${mins}:${secs}`;
}

function start (){
    if(interval){
        return
    }
        interval = setInterval(timer, 1000);
}

function stop (){
    clearInterval(interval);
    interval = null;
}
function reset(){
    stop();
    seconds = 0;
    timer_btn.innerText = '00:00:00';
}