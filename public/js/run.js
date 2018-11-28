(function($) {
  "use strict";

  // Newsticker Active Code
  $.simpleTicker($("#breakingNewsTicker"), {
    speed: 1000,
    delay: 3500,
    easing: "swing",
    effectType: "roll"
  });

  // Newsticker Active Code
  $.simpleTicker($("#stockNewsTicker"), {
    speed: 1200,
    delay: 3500,
    easing: "swing",
    effectType: "roll"
  });
})(jQuery);
