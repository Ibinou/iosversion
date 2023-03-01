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
  imageWrapper.style.transform = `translateX(-${index * 600}px)`;
  activeIndex = index;
  setActiveIndicator();
}

indicators.forEach((indicator, index) => {
  indicator.addEventListener('click', () => {
    showImage(index);
  });
});

showImage(activeIndex);
