const ANCHOR = document.querySelector(".hide");
const ALERT = document.querySelector("#booking-alert");

ANCHOR.classList.remove("hide");
ALERT.classList.add("hide");


function toggleAlert(e){
  e.preventDefault();
  ANCHOR.classList.toggle("hide");
  ALERT.classList.toggle("hide");
}

ANCHOR.onclick = toggleAlert;