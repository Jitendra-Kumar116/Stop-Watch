const clock = document.getElementById('clock');
const startBtn = document.getElementById('startBtn');
// const stopBtn = documnet.getElementById('stopBtn');
// const resetBtn = document.getElementById('resetBtn');

let timer = null;
let startTime=0;
let elapsedTime = 0;
let isRunning = false;

function start(){
    if(!isRunning){
        startTime = Date.now()-elapsedTime;
        timer=setInterval(update,10);
        isRunning = true;
    }
}
function stop(){
    if(isRunning){
        clearInterval(timer);
        elapsedTime = Date.now()-startTime;
        isRunning = false;
    }

}
function reset(){
    clearInterval(timer);
    startTime=0;
    elapsedTime =0;
    isRunning = false;
    
    clock.textContent = "00:00:00:00"
}
function update(){
    const currentTime = Date.now();
    elapsedTime = currentTime-startTime;

    let hour = Math.floor(elapsedTime/(1000*60*60));
    let minutes = Math.floor(elapsedTime/(1000*60)%60);
    let seconds = Math.floor(elapsedTime/1000%60);
    let milliseconds = Math.floor(elapsedTime%1000/10);

    hour = hour.toString().padStart(2,0);
    minutes = minutes.toString().padStart(2,0);
    seconds = seconds.toString().padStart(2,0);
    milliseconds = milliseconds.toString().padStart(2,0);

    clock.textContent = `${hour}:${minutes}:${seconds}:${milliseconds}`

}