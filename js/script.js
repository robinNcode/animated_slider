let slides = document.querySelectorAll('.slide-container');
let index = 0;

// next slide
function nextSlide() {
    slides[index].classList.remove('active');
    index = (index + 1) % slides.length;
    slides[index].classList.add('active');
}

// previous slide
function prevSlide() {
    slides[index].classList.remove('active');
    index = (index - 1 + slides.length) % slides.length;
    slides[index].classList.add('active');
}

// auto play
setInterval(nextSlide, 5000); // 5 seconds