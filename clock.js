const dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

const timeOptions = {
  hour: "numeric",
  minute: "numeric"
}

function startClock() {
  insertDateAndTime();
  setInterval(insertDateAndTime, 1000);
}

function insertDateAndTime() {
  const date = new Date();
  const dateString = date.toLocaleString("en-CA", dateOptions);
  const dateContainer = document.getElementById("date");
  dateContainer.textContent = dateString;

  const timeString = date.toLocaleString("en-CA", timeOptions);
  const clockContainer = document.getElementById("clock");
  clockContainer.textContent = timeString;
}

document.addEventListener("DOMContentLoaded", startClock());
