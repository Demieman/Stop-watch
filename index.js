const timerEl = document.getElementById('timer');
const startbuttonEl =document.getElementById("start");
const stopbuttonEl =document.getElementById("stop");
const resetbuttonEl =document.getElementById("reset");

let startTime=0;
let elapsedTime=0;
let timerInterval;
function startTimer(){
   startTime= Date.now()-elapsedTime
   timerInterval= setInterval(()=>{
elapsedTime=Date.now() - 
startTime
timerEl.textContent = elapsedTime;
   },10)
}
function stopTimer(){
    console.log("stop");
}
function resetTimer(){
    console.log("reset");
}


startbuttonEl.addEventListener("click",startTimer)
stopbuttonEl.addEventListener("click",stopTimer)
resetbuttonEl.addEventListener("click",resetTimer)