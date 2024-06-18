const clock = document.getElementById('clock');
const btn = document.getElementById('btn');
const day = document.getElementById('day');
const daysOfWeek = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const monthsOfYear = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];
const now = new Date();
const date = new Date();
let dayNumber = date.getDate();
let todayDay = date.getDay();
let month = date.getMonth();
let year = date.getFullYear();
let hours = now.getHours();
let minutes = now.getMinutes();
let seconds = now.getSeconds();

function formatTime(value) {
  return value.toString().padStart(2, '0');
}
function updateClock() {
  seconds++;

  if (seconds === 60) {
    seconds = 0;
    minutes++;
    if (minutes === 60) {
      minutes = 0;
      hours++;
      if (hours === 24) {
        hours = 0;
      }
    }
  }

  clock.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

setInterval(updateClock, 1000);

day.innerHTML = ` ${daysOfWeek[todayDay]} ${dayNumber} ${monthsOfYear[month]} ${year} `;
