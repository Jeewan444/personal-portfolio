// JavaScript for Certificate Slider
document.addEventListener('DOMContentLoaded', function () {
    const sliderWrapper = document.querySelector('.slider-wrapper');
    const slides = document.querySelectorAll('.certificate-item');
    const prevButton = document.querySelector('.prev-slide');
    const nextButton = document.querySelector('.next-slide');

    let currentIndex = 0;

    function showSlide(index) {
        const totalSlides = slides.length;
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        const offset = -currentIndex * 100;
        sliderWrapper.style.transform = `translateX(${offset}%)`;
    }

    prevButton.addEventListener('click', function () {
        showSlide(currentIndex - 1);
    });

    nextButton.addEventListener('click', function () {
        showSlide(currentIndex + 1);
    });

    // Optional: Auto-slide every 5 seconds
    setInterval(function () {
        showSlide(currentIndex + 1);
    }, 7000);
});
