// Countdown Timer
const weddingDate = new Date("February 04, 2025 12:58:00").getTime();

function updateTimer() {
    const now = new Date().getTime();
    const distance = weddingDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
        document.getElementById("timer").innerHTML = "The Wedding is Here!";
    }
}

setInterval(updateTimer, 1000);

// Slideshow Logic
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

function showNextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    const offset = -currentSlide * 100;
    slides.forEach(slide => slide.style.transform = `translateX(${offset}%)`);
}

setInterval(showNextSlide, 3000); // Change slide every 3 seconds
var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000); // Change image every 2 seconds
}