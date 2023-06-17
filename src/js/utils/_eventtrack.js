//new from Marco Mantegazza
function trackEvent(category, action, label) {
  if (typeof dataLayer != 'undefined' && location.hostname != "localhost") {
    dataLayer.push({
      'event': 'eventFired',
      'eventAttributes': {
        'origin': 'Platform',
        'category': category,
        'action': action,
        'label': label
      }
    })
  } else{
    console.log(category, action, label);
  }
}

//=== Track event on html element (es.: click) ===
function trackEventOnElement(el) {

    var
    $el      = $(el),
    category = $el.data('category'),
    action   = $el.data('action'),
    label    = $el.data('label')

    trackEvent(category, action, label)

}

//=== jQuery track event ===
require(['jquery'], function($) {
    $('.track').click(function(e) {
        // e.stopPropagation()
        trackEventOnElement(this)
    })
})
