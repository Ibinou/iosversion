const imageWrapper = document.querySelector('.image-wrapper');
const indicators = document.querySelectorAll('.indicator');
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
  const distance = (index - activeIndex) * -600;
  imageWrapper.style.transition = 'transform 0.6s ease-out';
  imageWrapper.style.transform = `translateX(${distance}px)`;
  activeIndex = index;
  setActiveIndicator();
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showImage(index);
  });
});

showImage(activeIndex);
