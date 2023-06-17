function goToSection(section, duration = 1, offset = 0) {
  GSAP.to(window, {
    scrollTo: { y: section, offsetY: offset, autoKill: true },
    duration: duration,
  });
}

$(document).on('click', '.anchorpoint', function (e) {
  e.stopPropagation();
  const target = $(this).attr('data-anchor');
  const offset = parseInt($(this).attr('data-anchor-offset')) || 0;
  const duration = parseInt($(this).attr('data-anchor-duration')) || 1;
  goToSection(target,duration,offset);
});