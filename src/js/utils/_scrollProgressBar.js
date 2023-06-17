/*!
 * Run a callback function after scrolling has stopped
 * (c) 2017 Chris Ferdinandi, MIT License, https://gomakethings.com
 * @param  {Function} callback The function to run after scrolling
 */
const scrollStop = function (callback) {

  // Make sure a valid callback was provided
  if (!callback || typeof callback !== 'function') return;

  // Setup scrolling variable
  let isScrolling;

  // Listen for scroll events
  window.addEventListener('scroll', function (event) {

    // Clear our timeout throughout the scroll
    window.clearTimeout(isScrolling);

    // Set a timeout to run after scrolling ends
    isScrolling = setTimeout(function () {

      // Run the callback
      callback();

    }, 1000);

  }, false);

};

//scroll indicator
const scrollprogress = new GSAP.timeline();

scrollprogress.to(".scroll-progress", {
  transform: 'translate3d(0,0vh,0)',
  ease: Linear.easeNone
});

SCROLLTRIGGER.create({
  trigger: "body",
  animation: scrollprogress,
  scrub: .5,
  start: "top top",
  end: "bottom bottom"
});


window.addEventListener("scroll", () => {
  $(".scroll-indicator").fadeIn(100)
})

scrollStop(() => {
  $(".scroll-indicator").fadeOut(500)
});