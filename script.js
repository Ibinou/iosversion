const imageWrapper = document.querySelector('.image-wrapper');
const indicators = document.querySelectorAll('.indicator');
const slideInterval = 5000; // Set the slide interval time in milliseconds
let slideTimer;

let activeIndex = 0;

function setActiveIndicator() {
  indicators.forEach((indicator, index) => {
    if (index === activeIndex) {
      indicator.classList.add('active');
    } else {
      indicator.classList.remove('active');
    }
  });
}

function showImage(index) {
  imageWrapper.style.transform = `translateX(-${index * 600}px)`;
  activeIndex = index;
  setActiveIndicator();
}

function startSlideTimer() {
  slideTimer = setInterval(() => {
    let nextIndex = activeIndex + 1;
    if (nextIndex >= indicators.length) {
      nextIndex = 0;
    }
    showImage(nextIndex);
  }, slideInterval);
}

function stopSlideTimer() {
  clearInterval(slideTimer);
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    stopSlideTimer();
    showImage(index);
    startSlideTimer();
  });
});

startSlideTimer();
