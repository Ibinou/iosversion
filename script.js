const carouselContainer = document.querySelector('.carousel-container');
const carouselImages = document.querySelector('.carousel-images');
const carouselIndicators = document.querySelectorAll('.carousel-indicator');

let currentIndex = 0;

carouselIndicators[currentIndex].classList.add('active');

carouselIndicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    currentIndex = index;
    updateCarousel();
  });
});

function updateCarousel() {
  carouselImages.style.transform = `translateX(-${currentIndex * 100}%)`;

  carouselIndicators.forEach((indicator, index) => {
    if (index === currentIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

setInterval(() => {
  currentIndex = (currentIndex + 1) % carouselIndicators.length;
  updateCarousel();
}, 3000);
