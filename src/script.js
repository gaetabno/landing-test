import {gsap} from "gsap";
import {ScrollTrigger} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// NAVBAR

const hamb = document.querySelector(".c-navbar__hamb");
const navbarDrawer = document.querySelector(".c-navbar__drawer");

hamb.addEventListener("click", (e) => {
    hamb.classList.toggle("clicked");
    navbarDrawer.classList.toggle("open");
});

//---------------------

let prev = 200;
const navbar = document.querySelector(".js-navbar");
const nseLogo = document.querySelector(".js-navbar .js-navbar__logo");

window.addEventListener("scroll", function () {
  let scrollTop = window.pageYOffset || 0;

  if (scrollTop > prev) {
    navbar.classList.add("visible"); 
  } else {
    navbar.classList.remove("visible");
  }
 
});

//HOME

const muteButton = document.querySelector(".js-mute__button");
const videoBg = document.querySelector(".l-hero__background--video");

muteButton.addEventListener("click", () => {
    muteButton.classList.toggle("clicked");
    videoBg.muted = !videoBg.muted;
});

// scroll to section two

document.querySelectorAll(".js-scrollto-section-two").forEach((el) => {
    el.addEventListener("click", () => {
        document.getElementById("below-hero").scrollIntoView({
            behavior: "smooth",
        });
    });
});

// MOTION TEXT

function textScrolling() {
    document.body.style.overflow = "auto";
    document.scrollingElement.scrollTo(0, 0);

    gsap.utils.toArray(".js-motiontext").forEach((section) => {
        const text = section.querySelector(".js-textmove");
        const w = text.querySelector(".js-textmove__wrapper");
        const text_padding = ((16000 / 1920) * window.innerWidth) / 100;
        const [xEnd, x] = [w.scrollWidth * -1 + window.innerWidth, 0];
        const animImage = section.querySelector(".js-imagemove");
        const cta = section.querySelector(".c-motion-text__cta");
        const tl = gsap.timeline({defaults: {ease: "expo.out"}});
        const imageAnimation = () => {
            tl.fromTo(
                animImage,
                {
                    y: 100,
                    xPercent: -50,
                    opacity: 0,
                    scale: 0.9,
                },
                {
                    y: 0,
                    xPercent: -50,
                    scale: 1,
                    opacity: 1,
                    duration: 1,
                    duration: 1,
                    delay: 0.5,
                }
            ).fromTo(
                cta,
                {
                    opacity: 0,
                },
                {
                    opacity: 1,
                    duration: 1,
                    duration: 1,
                    x: 200,
                },
                "-=0.5"
            );
        };
        gsap.fromTo(
            w,
            {x},
            {
                x: xEnd - text_padding,
                //yPercent:90,
                scrollTrigger: {
                    // markers: true,
                    trigger: text,
                    pin: text,
                    start: "top+=50 bottom-=210",
                    end: "50% center",
                    scrub: 1,
                },
                onStart: imageAnimation,
            }
        );
    });
}
textScrolling();

// PRODUCT IMAGES ANIMATION

const targets = document.querySelectorAll(".js-products__image");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }
        });
    },
    { 
    threshold: [0.8]
    }
);

targets.forEach((image) => {
    observer.observe(image);
});
