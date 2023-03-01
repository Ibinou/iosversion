const imageWrapper = document.querySelector('.image-wrapper');
const indicators = document.querySelectorAll('.indicator');
const slideInterval = 5000; // Set the slide interval time in milliseconds
let slideTimer;

let activeIndex = 0;
let startX = 0;
let endX = 0;

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
  const distance = (index - activeIndex) * -600;
  imageWrapper.style.transition = 'transform 0.6s ease-out';
  imageWrapper.style.transform = `translateX(${distance}px)`;
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

function handleTouchStart(e) {
  startX = e.touches[0].clientX;
}

function handleTouchMove(e) {
  endX = e.touches[0].clientX;
}

function handleTouchEnd() {
  if (startX - endX > 50) {
    let nextIndex = activeIndex + 1;
    if (nextIndex >= indicators.length) {
      nextIndex = 0;
    }
    showImage(nextIndex);
  } else if (endX - startX > 50) {
    let nextIndex = activeIndex - 1;
    if (nextIndex < 0) {
      nextIndex = indicators.length - 1;
    }
    showImage(nextIndex);
  }
}

imageWrapper.addEventListener('touchstart', handleTouchStart);
imageWrapper.addEventListener('touchmove', handleTouchMove);
imageWrapper.addEventListener('touchend', handleTouchEnd);

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    stopSlideTimer();
    showImage(index);
    startSlideTimer();
  });
});

startSlideTimer();
