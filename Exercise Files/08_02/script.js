/* type speed calculator */

const testWrapper = document.querySelector(".test-wrapper");
const testArea = document.querySelector("#test-area");
const originText = document.querySelector("#origin-text p").innerHTML;
const resetButton = document.querySelector("#reset");
const theTimer = document.querySelector(".timer");

let stopWatch = [0, 0, 0, 0];
let timerStarted = false;
let interval = null;

/* Add leading zero to numbers 9 or below (purely for aesthetics): */
function appendZero(time) {
  if (time <= 9) {
    time = "0" + time;
  }
  return time;
}

/* Run a standard minute/second/hundredths timer */
function updateTimer() {
  stopWatch[3]++; // ++ for every millisecond

  stopWatch[0] = Math.floor((stopWatch[3] / 100 / 60));
  stopWatch[1] = Math.floor((stopWatch[3] / 100));
  stopWatch[2] = Math.floor((stopWatch[3] - stopWatch[1] * 100 - stopWatch[0] * 6000));

  theTimer.innerHTML = appendZero(stopWatch[0]) + ":" + appendZero(stopWatch[1]) + ":" + appendZero(stopWatch[2]);
}

/* Match the text entered with the provided text on the page */
function matchText() {
  let inputValue = testArea.value;
  let orgSubString = originText.substring(0, inputValue.length);

  if (originText == inputValue) {
    reset();
  } else {
    if (inputValue === orgSubString) {
      testWrapper.style.borderColor = "#008000";
    } else {
      testWrapper.style.borderColor = "#FF0000";
    }
  }
}

/* Start the timer */
function startTimer() {
  let testAreaLength = testArea.value.length;
  if (testAreaLength === 0 && !timerStarted) { //if timerStarted isn't there, multiple timers are created when using non alphanumeric keys
    timerStarted = true;
    interval = setInterval(updateTimer, 10);
  }
}

/* Reset everything */
function reset() {
  clearInterval(interval);
  interval = null;
  timerStarted = false;
  stopWatch = [0, 0, 0, 0];

  theTimer.innerHTML = "00:00:00";
  testArea.value = "";
  testWrapper.style.borderColor = "";
}

/* Event listeners for keyboard input and the reset button */
testArea.onkeydown = startTimer;
resetButton.onclick = reset;
testArea.addEventListener("keyup", matchText, false);