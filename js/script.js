let currentSlide = 0;
const slides = document.querySelector('.slides');
const slideWidth = document.querySelector('.slide').offsetWidth;

function showSlide() {
    slides.style.transform = `translateX(${-currentSlide * slideWidth}px)`;
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.children.length) % slides.children.length;
    showSlide();
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.children.length;
    showSlide();
}

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);
