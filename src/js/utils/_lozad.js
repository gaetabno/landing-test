//=require ../polyfill/intersectionObserver.js


window.onload = () => {

  require(['Lozad'], function (lozad) {

    const observer = lozad();
    const toBeLoaded = document.querySelectorAll('.lozad');
    const toBeShown = Array.from(document.querySelectorAll('.lozad--toload'));

    const intersectionObserver = new window.IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            let delay = e.target.getAttribute("data-show-delay") || 0;
            setTimeout(() => {
              e.target.classList.add("lozad--inview")
              $(e.target).parents(".media-cont").find(".plg-hotspot").addClass("plg-hotspot--inview")
            }, delay);


          } else {

          }
        });
      },
      {
        threshold: 0,
        rootMargin: "0px",
      }
    );

    toBeLoaded.forEach((e) => {
      observer.triggerLoad(e)
      e.classList.add("lozad--toload");
      toBeShown.push(e)
    })

    toBeShown.forEach((e) => {
      intersectionObserver.observe(e);
    })

  })

};