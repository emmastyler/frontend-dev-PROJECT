const headers = document.querySelectorAll(".accordion-header");
headers.forEach((header) => {
  header.addEventListener("click", () => {
    const content = header.nextElementSibling;
    const Items = document.querySelectorAll(".accordion-content");
    Items.forEach((Item) => {
      if (Item.classList.contains("active")) {
        Item.classList.remove("active");
      }
    });
    content.classList.toggle("active");
  });
});

//========== Carousel Code ===========//
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const track = document.querySelector(".carousel-track");
const slides = document.querySelectorAll(".carousel-slide img");

let currentIndex = 0;

next.addEventListener("click", () => {
  if (currentIndex < slides.length - 1) {
    currentIndex++;
  } else currentIndex = 0;
  track.style.transform = `translateX(${-currentIndex * 600}px)`;
});

prev.addEventListener("click", () => {
  if (currentIndex > 0) {
    currentIndex--;
  } else currentIndex = slides.length - 1;
  track.style.transform = `translateX(${-currentIndex * 600}px)`;
});

//========== Slider Code ===========//

const sliderTracker = document.querySelector(".slider-tracker");
const nextBtn = document.querySelector(".nextBtn");
const prevBtn = document.querySelector(".prevBtn");
const images = document.querySelectorAll(".slider-slide img");

let currentIndice = 0;

nextBtn.addEventListener("click", () => {
  if (currentIndice < images.length - 1) {
    currentIndice++;
  } else currentIndice = 0;
  sliderTracker.style.transform = `translateY(${-currentIndice * 300}px)`;
});

prevBtn.addEventListener("click", () => {
  if (currentIndice > 0) {
    currentIndice--;
  } else currentIndice = images.length - 1;
  sliderTracker.style.transform = `translateY(${-currentIndice * 300}px)`;
});
