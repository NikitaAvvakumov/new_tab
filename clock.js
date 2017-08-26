var dateOptions = {
  weekday: "long",
  year: "numeric",
  month: "long",
  day: "numeric"
};

var timeOptions = {
  hour: "numeric",
  minute: "numeric"
}

function startClock() {
  insertDateAndTime();
  setInterval(insertDateAndTime, 1000);
}

function insertDateAndTime() {
  var date = new Date();
  var dateString = date.toLocaleString("en-CA", dateOptions);
  var dateContainer = document.getElementById("date");
  dateContainer.textContent = dateString;

  var timeString = date.toLocaleString("en-CA", timeOptions);
  var clockContainer = document.getElementById("clock");
  clockContainer.textContent = timeString;
}

document.addEventListener("DOMContentLoaded", startClock());
