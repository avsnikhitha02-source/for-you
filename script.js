let currentSlide = 0;
let slides = document.querySelectorAll(".slide");

function nextSlide() {
    slides[currentSlide].classList.remove("active");
    currentSlide++;
    slides[currentSlide].classList.add("active");
}
