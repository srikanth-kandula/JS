const HOURHAND = document.querySelector("#hour");
const MINUTEHAND = document.querySelector("#minute");
const SECONDHAND = document.querySelector("#second");

function runClock() {
  let date = new Date();

  let currentHours = date.getHours();
  if (currentHours > 12)
    currentHours -= 12;

  let currentMinutes = date.getMinutes();
  let currentSeconds = date.getSeconds();


  let hourRotation = (currentHours * 360 / 12) + ((currentMinutes / 60) * (360 / 12));
  let minRotation = (currentMinutes * 360 / 60) + ((currentSeconds / 60) * (360 / 60))
  let secRotation = currentSeconds * 360 / 60;

  HOURHAND.style.transform = "rotate(" + hourRotation + "deg)";
  MINUTEHAND.style.transform = "rotate(" + minRotation + "deg)";
  SECONDHAND.style.transform = "rotate(" + secRotation + "deg)";
}

setInterval(runClock,1000);