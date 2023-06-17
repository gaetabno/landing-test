window.addEventListener('scroll', () => {
  let top = window.pageYOffset || document.documentElement.scrollTop;
  let treshold = document.querySelector(".section__onlocation").offsetTop - 70;
  const topnav = document.querySelector(".top-nav-bar");
  if (top >= treshold) {
    topnav.classList.add("bg-gradient");
  } else {
    topnav.classList.remove("bg-gradient");
  }
  document.querySelector('.top-nav-bar').classList.remove('top-nav-bar--menu-active');
});

document.querySelector('.hamburger-cont').onclick = function () {
  document.querySelector('.top-nav-bar').classList.toggle('top-nav-bar--menu-active');
}
document.querySelector('.menu-cont').onclick = function () {
  document.querySelector('.top-nav-bar').classList.remove('top-nav-bar--menu-active');
}