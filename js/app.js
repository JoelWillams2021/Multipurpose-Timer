var timerValue = document.getElementById("timerValue").value;
var countDown = "";
var audio = new Audio('audio/timer-up-sound.mp3');
var btnFunction =    document.getElementById("Timer-Button-One");
var pauseBtn = document.getElementById("Timer-Button-Fourth").addEventListener('click', pauseTimer);
var pauseBtnSecond = document.getElementById("Timer-Button-Fourth");
var resumeBtn = document.getElementById("Timer-Button-Fifth").addEventListener('click', pauseTimerTime);
var resumeBtnTwo = document.getElementById("Timer-Button-Fifth");
var pausedTimeValue = "";

function timer(){
    timerValue = document.getElementById("timerValue").value;
    if (timerValue > 0) {
        btnFunction.disabled = true;
        pauseBtnSecond.disabled = false;
        countDown = setInterval(() => {
            document.getElementById("timerDisplay").innerHTML = "The time remaining is " +    timerValue + " second(s)";
            if (timerValue === 0) {
                clearInterval(countDown);
                document.getElementById("timerDisplay").innerHTML = "The time is over"; 
                btnFunction.disabled = false;
                audio.play();
        } 
        timerValue--;
        }, 1000);
    }
}

function stopTimer(){
    audio.pause();
 }

 function pauseTimer(){
    pausedTimeValue = timerValue;
    if (pausedTimeValue === 0){
        pausedTimeValue ++;
    }
    clearInterval(countDown);
    resumeBtnTwo.disabled = false;
    btnFunction.disabled = false;
 }

 function pauseTimerTime(){
    if (pausedTimeValue > 0){
        btnFunction.disabled = true;
        resumeBtnTwo.disabled = true;
        countDown = setInterval(() => {
        document.getElementById("timerDisplay").innerHTML = "The time remaining is " +    timerValue + " second(s)";
        if (timerValue === 0) {
            clearInterval(countDown);
            document.getElementById("timerDisplay").innerHTML = "The time is over"; 
            btnFunction.disabled = false;
            audio.play();
        } 
        timerValue--;
        }, 1000);
    }

}
