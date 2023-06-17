import {
    gsap
} from "gsap";
import {
    ScrollTrigger
} from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

// NAVBAR

const hamb = document.querySelector(".c-navbar__hamb");
const navbarDrawer = document.querySelector(".c-navbar__drawer");

hamb.addEventListener("click", (e) => {
    hamb.classList.toggle('clicked');
    navbarDrawer.classList.toggle('open');
});


//HOME

const muteButton = document.querySelector(".js-mute__button");
const videoBg = document.querySelector(".l-hero__background--video");


muteButton.addEventListener("click", () => {
    muteButton.classList.toggle('clicked');
    videoBg.muted = !videoBg.muted;
});


// scroll to section two

document.querySelectorAll(".js-scrollto-section-two").forEach(el => {
    el.addEventListener("click", () => {
        document.getElementById('below-hero').scrollIntoView({
            behavior: 'smooth'
        });
    })
})


// MOTION TEXT


function textScrolling() {
    document.body.style.overflow = 'auto';
    document.scrollingElement.scrollTo(0, 0);

    gsap.utils.toArray('.js-textmove').forEach((section) => {
        const w = section.querySelector('.js-textmove__wrapper');
        const text_padding= (16000 / 1920) * window.innerWidth / 100;
        const [xEnd, x] = [(w.scrollWidth * -1) + window.innerWidth, 0];
        //console.log(xEnd,text_padding,xEnd +  text_padding )
        gsap.fromTo(w, {
            x
        }, {
            x: xEnd - text_padding, 
            yPercent:90,
            scrollTrigger: {
                //markers: true,
                trigger: section,
                pin: section,
                start: "top center",
                end: "50% center",
                scrub: 1
            }
        });
    });
}
textScrolling();


// AUTHOR SLIDER

const authorSlider = () => {
    const section = document.getElementsByClassName('l-author');
    const copySection = document.querySelector('.l-author__copy'); 

    gsap.to(section,{  
        scrollTrigger:{ 
            pin:copySection,
            trigger:section, 
            start: "-=78",
            end: "max ",
            snap:1,
            duration:0.1
           }
    })
}
authorSlider();