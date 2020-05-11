function showTime() {
  let date = new Date();
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let seconds = date.getSeconds();

  let PmAm = formattedPmAm(hours);

  hours = addZero(hours);
  minutes = addZero(minutes);
  seconds = addZero(seconds);

  document.querySelector(
    "#time"
  ).innerHTML = `${hours} : ${minutes} : ${seconds} ${PmAm}`;
}

function formattedPmAm(time) {
  format = "AM";
  if (time >= 12) {
    format = "PM";
  }
  return format;
}

function addZero(time) {
  if (time < 10) {
    time = "0" + time;
  }
  return time;
}

showTime();
setInterval(showTime, 1000);
