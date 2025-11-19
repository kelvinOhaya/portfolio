import initCarousel from "./carousel.js";
import initIntersectionObserver from "./intersectionObserver.js";

document.addEventListener("DOMContentLoaded", () => {
  initIntersectionObserver();
  initCarousel();
});
