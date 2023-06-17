

  require(['jquery'], function () {
    setTimeout(function () {
      let url_string = location.href;
      let url = new URL(url_string);
      let c = url.searchParams.get("scrollTo");
      if (c != null) {
        let $el = $('.' + c);
        if ($el.length) {
          let to = $el.offset().top;
          console.log('SCROLLTOP: ' + to);
          if ($(window).width() > 1023) {
            $('body, html').animate({
              scrollTop: to
            }, 500, 'swing');
          } else {
            $('body, html').animate({
              scrollTop: to
            }, 500, 'swing');
          }
        }
      }
    }, 1500);
  });
