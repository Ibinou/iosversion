const carouselImages = document.querySelector(".carousel-images");
const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

let scrollAmount = 0;
const scrollStep = 200;

prevButton.addEventListener("click", () => {
  carouselImages.scrollTo({
    left: (scrollAmount -= scrollStep),
    behavior: "smooth"
  });
});

nextButton.addEventListener("click", () => {
  carouselImages.scrollTo({
    left: (scrollAmount += scrollStep),
    behavior: "smooth"
  });
});
