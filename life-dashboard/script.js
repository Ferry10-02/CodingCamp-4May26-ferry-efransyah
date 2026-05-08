// script.js

// CLOCK
function updateClock() {
  const now = new Date();

  let hours = String(now.getHours()).padStart(2, '0');
  let minutes = String(now.getMinutes()).padStart(2, '0');
  let seconds = String(now.getSeconds()).padStart(2, '0');

  document.getElementById("clock").innerText =
    `${hours}:${minutes}:${seconds}`;
}

setInterval(updateClock, 1000);
updateClock();


// TODO LIST
function addTask() {
  const input = document.getElementById("todoInput");
  const taskText = input.value.trim();

  if(taskText === "") return;

  const li = document.createElement("li");

  li.innerHTML = `
    ${taskText}
    <button class="delete-btn" onclick="this.parentElement.remove()">
      Hapus
    </button>
  `;

  document.getElementById("todoList").appendChild(li);

  input.value = "";
}


// TIMER
let time = 25 * 60;
let timerInterval;

function updateTimerDisplay() {
  let minutes = Math.floor(time / 60);
  let seconds = time % 60;

  minutes = String(minutes).padStart(2, '0');
  seconds = String(seconds).padStart(2, '0');

  document.getElementById("timer").innerText =
    `${minutes}:${seconds}`;
}

function startTimer() {
  clearInterval(timerInterval);

  timerInterval = setInterval(() => {
    if(time > 0){
      time--;
      updateTimerDisplay();
    } else {
      clearInterval(timerInterval);
      alert("Waktu fokus selesai!");
    }
  }, 1000);
}

function pauseTimer() {
  clearInterval(timerInterval);
}

function resetTimer() {
  clearInterval(timerInterval);
  time = 25 * 60;
  updateTimerDisplay();
}

updateTimerDisplay();