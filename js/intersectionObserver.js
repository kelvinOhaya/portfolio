export default function initIntersectionObserver() {
  const homeContainer = document.querySelector("#home");
  if (!homeContainer) {
    console.warn(
      "initIntersectionObserver: '#home' not found. Observer not created."
    );
    return;
  }

  //animate the homeContainer with the animations found
  const duration = 1000;
  const homeScrollAnim = homeContainer.animate(
    [
      { opacity: 0, scale: 0.5 },
      { opacity: 1, scale: 1 },
    ],
    duration
  );
  homeScrollAnim.pause();
  //makes an array from [0.1,1.0]
  const thresholds = Array.from({ length: 101 }, (_, i) => i / 100);

  //observes where the element is at on the screen, and adjusts the animation accordingly
  const observer = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        homeScrollAnim.currentTime = entry.intersectionRatio * duration;
      });
    },
    { threshold: thresholds }
  );

  observer.observe(homeContainer);
}
