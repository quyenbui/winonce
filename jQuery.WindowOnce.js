(function($) {
  var runs = {};
  $.fn.winonce = function(id) {
    var run = runs[id];
    if (runs[id] === undefined) {
      runs[id] = true;
    }
    return run === true ? $() : this;
  };
})(jQuery);
