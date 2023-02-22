let cellSeconds = document.getElementById("seconds");
let cellMinutes = document.getElementById("minutes");
let cellHours = document.getElementById("hours");
let cellDays = document.getElementById("days");

const startYear = 2025;
const startMonth = 4;
const startDay = 31;

let startDate = new Date(startYear, startMonth, startDay);

const timeСlock = () => {
  let today = new Date();
  let todayMill = today.getTime();
  let startDateMill = startDate.getTime();

  let counterTime = startDateMill - todayMill;

  let seconds = counterTime > 0 ? Math.floor(counterTime / 1000) % 60 : 0;

  let minutes = counterTime > 0 ? Math.floor(counterTime / 1000 / 60) % 60 : 0;
  let hours =
    counterTime > 0 ? Math.floor(counterTime / 1000 / 60 / 60) % 24 : 0;
  let days =
    counterTime > 0 ? Math.floor(counterTime / 1000 / 60 / 60 / 24) : 0;

  seconds = seconds < 10 ? `0${seconds}` : seconds;
  minutes = minutes < 10 ? `0${minutes}` : minutes;
  hours = hours < 10 ? `0${hours}` : hours;
  days = days < 10 ? `0${days}` : days;

  cellSeconds.textContent = seconds;
  cellMinutes.textContent = minutes;
  cellHours.textContent = hours;
  cellDays.textContent = days;
};
timeСlock()
setInterval(timeСlock, 1000);
