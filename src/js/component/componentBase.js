var ComponentFactory = function (config) {
  var $Div = $('<div></div>');

  config.className && $Div.addClass(config.className);
  config.content && $Div.append($(config.content));
  config.contentCss && $Div.find('.content').css(config.contentCss);
  config.css && $Div.css(config.css);
  if (config.event) {
    for (var prop in config.event) {
      $Div.on(prop, config.event[prop]);
    }
  }

  {/* <div class="component">
      <div class="content"></div>
  </div> */}

  var an = config.animation;
  var content = $Div.find('.content');
  $Div.on("cpLoad", function () {
    var self = this;
    setTimeout(function () {
      an.animateIn && $(self).animate(an.animateIn, 2000,"swing", function(){});
      an.contentIn && content.animate(an.contentIn, 2000,"swing", function(){});
    }, an.inDelay || 0);
  });

  $Div.on("cpLeave", function () {
    var self = this;
    setTimeout(function () {
      an.animateOut && $(self).animate(an.animateOut, 250,"swing", function(){});
      an.contentOut && content.animate(an.contentOut, 250,"swing", function(){});
    }, an.outDelay || 0);
  });

  return $Div;
};
