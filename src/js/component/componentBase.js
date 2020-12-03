var ComponentFactory = function (config) {
  var $Div = $('<div class="component base"></div>');

  config.className && $Div.className(config.className);
  config.content && $Div.append($(config.content));
  config.css && $Div.css(config.css);
  if (config.event) {
    for (var prop in config.event) {
      $Div.on(prop, config.event[prop]);
    }
  }

  var an = config.animation;
  $Div.on("cpLoad", function () {
    var self = this;
    setTimeout(function () {
      an.animateIn && $(self).animate(an.animateIn, an.movement, an.inCallback());
    }, an.delay || 0);
  });

  $Div.on("cpLeave", function () {
    var self = this;
    setTimeout(function () {
      an.animateOut && $(self).animate(an.animateOut, an.movement, an.outCallback());
    }, an.delay || 0);
  });

  return $Div;
};
