const carouselImages = document.querySelector('.carousel-images');
const carouselIndicators = document.querySelectorAll('.indicator');

let currentIndex = 0;

carouselIndicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

function updateCarousel() {
  carouselImages.style.transform = `translateX(-${currentIndex * carouselImages.offsetWidth}px)`;

  carouselIndicators.forEach((indicator, index) => {
    if (index === currentIndex)
