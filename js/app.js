var timerValue = document.getElementById("timerValue").value;
var countDown = "";
var audio = new Audio('audio/timer-up-sound.mp3');
var btnFunction =  document.getElementById("Timer-Button-One")
var btnFunctionSecond = document.getElementById("Timer-Button-Second")
var pauseBtn = document.getElementById("Timer-Button-Fourth").addEventListener('click', pauseTimer);
var resumeBtnTwo = document.getElementById("Timer-Button-Fifth");
var resumeBtn = document.getElementById("Timer-Button-Fifth").addEventListener('click', pauseTimerTime);
var pausedTimeValue = "";

function timer(){
  timerValue = document.getElementById("timerValue").value;
  if (timerValue > 0){
    btnFunction.disabled = true;
    btnFunctionSecond.disabled = true;
    countDown = setInterval(() => {
    document.getElementById("timerDisplay").innerHTML = "The time remaining is " +  timerValue + " second(s)";
    if (timerValue === 0) {
      clearInterval(countDown);
      document.getElementById("timerDisplay").innerHTML = "The time is over"; 
      btnFunction.disabled = false;
      btnFunctionSecond.disabled = false;
      audio.play();
    } 
    timerValue--;
    }, 1000);
  }
}

function stopTimer(){
  if (timerValue > 0){
    clearInterval(countDown);
    btnFunctionSecond.disabled = false;
    audio.pause();
  }
 }

 function pauseTimer(){
   pausedTimeValue = timerValue;
   if (pausedTimeValue === 0){
    pausedTimeValue ++;
    console.log(pausedTimeValue)
   }
   clearInterval(countDown);
   resumeBtnTwo.disabled = false;
 }

 function pauseTimerTime(){
  if (pausedTimeValue > 0){
    btnFunction.disabled = true;
    resumeBtnTwo.disabled = true;
    countDown = setInterval(() => {
    document.getElementById("timerDisplay").innerHTML = "The time remaining is " +  timerValue + " second(s)";
    if (timerValue === 0) {
      clearInterval(countDown);
      document.getElementById("timerDisplay").innerHTML = "The time is over"; 
      btnFunction.disabled = false;
      btnFunctionSecond.disabled = false;
      audio.play();
    } 
    timerValue--;
    }, 1000);
  }

}
