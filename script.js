const carouselImages = document.querySelector(".carousel-images");
const dotsContainer = document.querySelector(".carousel-dots");

let scrollAmount = 0;
const scrollStep = carouselImages.offsetWidth;

carouselImages.addEventListener("scroll", () => {
  const activeDot = document.querySelector(".carousel-dot.active");
  if (activeDot) {
    activeDot.classList.remove("active");
  }
  const dotIndex = Math.round(carouselImages.scrollLeft / scrollStep);
  const dot = document.querySelector(`.carousel-dot[data-index="${dotIndex}"]`);
  if (dot) {
    dot.classList.add("active");
  }
});

for (let i = 0; i < carouselImages.children.length; i++) {
  const dot = document.createElement("div");
  dot.classList.add("carousel-dot");
  dot.setAttribute("data-index", i);
  dot.addEventListener("click", () => {
    carouselImages.scrollTo({
      left: i * scrollStep,
      behavior: "smooth"
    });
  });
  dotsContainer.appendChild(dot);
}

let touchStartX = 0;
let touchEndX = 0;

carouselImages.addEventListener("touchstart", e => {
  touchStartX = e.touches[0].clientX;
});

carouselImages.addEventListener("touchend", e => {
  touchEndX = e.changedTouches[0].clientX;
  if (touchEndX < touchStartX) {
    carouselImages.scrollBy({
      left: scrollStep,
      behavior: "smooth"
    });
  } else if (touchEndX > touchStartX) {
    carouselImages.scrollBy({
      left: -scrollStep,
      behavior: "smooth"
    });
  }
});
