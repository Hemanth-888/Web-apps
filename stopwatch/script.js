// const mainDiv=document.getElementById('timer')

// let button=document.createElement('button')
// let first=document.getElementById('first')
// let second=document.getElementById('second')

// let hr=5;
// let m=0;

// let myInterval=setInterval(start,100)

// function start()
// {
//     m++;
//     second.textContent=m;
//     if(m.target.value>=60)
//     {
//         m.textContent=0;
//         hr++;
//     }

// }
// function stop()
// {
//     clearInterval(myInterval)
    
// }
// function reset()
// {
//     m.textContent=0;
//     hr.textContent=5;

// }


// document.getElementById('start').addEventListener('click',start)
// document.getElementById('stop').addEventListener('click',stop)
// document.getElementById('reset').addEventListener('click',reset)


let timer = document.getElementById('timer');
let startButton = document.getElementById('start');
let stopButton = document.getElementById('stop');
let resetButton = document.getElementById('reset');

let totalTime = 5 * 60; //in seconds we've taken
let interval = 0;

function updateTime() {

 let minutes = Math.floor(totalTime / 60);
 let seconds = totalTime % 60;
 let formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
 let formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

 timer.textContent = formattedMinutes + ':' + formattedSeconds;
}

function startTimer() {
  if (interval) return; 

  interval = setInterval(() => {
    if (totalTime > 0) {
      totalTime--;
      updateTime();
    } else {
      clearInterval(interval);
      interval = null;
      alert('time is over!⏳');
    }
  }, 1000);
}

function stopTimer() {
  clearInterval(interval);
  interval = 0;
}

function resetTimer() {
  stopTimer();
  totalTime = 5 * 60;
  updateTime();
}

startButton.addEventListener('click', startTimer);
stopButton.addEventListener('click', stopTimer);
resetButton.addEventListener('click', resetTimer);

updateTime();