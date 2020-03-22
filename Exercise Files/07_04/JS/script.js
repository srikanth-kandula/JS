const CTA = document.querySelector(".cta a");
const ALERT = document.querySelector("#booking-alert");

CTA.classList.remove("hide");
ALERT.classList.add("hide");

function reveal(e, currentObj) {
    e.preventDefault();
    currentObj.innerHTML == "Book Now!" ? CTA.innerHTML= "ayyayo!" : CTA.innerHTML = "Book Nowwwww!";
    ALERT.classList.toggle("hide");
}

CTA.addEventListener("click", function(e){reveal(e, this)}, false);
