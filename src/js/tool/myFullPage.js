$.fn.extend({
  myFullPage: function (config) {
    // 保存this及常用元素
    var $w = $(this);
    var $sec = $w.find(".section");
    var colorsArray = config.colorsArray;
    var clientHeight = $(window).outerHeight();
    var clientWidth = $(window).outerWidth();
    var commonStyle = {
      width: "100%",
      height: "100%",
    };
    var curIndex = 0;
    var lock = true;

    // 初始化样式

    // 给html body wrapper section添加共同样式
    $("html")
      .add("body")
      .css({
        position: "relative",
        overflow: "hidden",
        margin: 0,
      })
      .add($w)
      .add($sec)
      .css(commonStyle);

    // 给wrapper section slide添加特殊样式
    $w.css({
      position: "absolute",
      left: 0,
      top: 0,
    })
      .find($sec)
      .each(function (index, elem) {
        $(elem)
          .css({
            backgroundColor: colorsArray[index],
            position: "relative", //sliderWrapper包含块
          })
          .find(".slide")
          .css({
            float: "left",
            width: clientWidth,
            height: clientHeight,
            position: "relative", //slide里面内容的包含块
          })
          .wrapAll('<div class="slideWrapper"></div>');
      });

    // 设置slideWrapper宽高
    $sec.find(".slideWrapper").each(function (index, elem) {
      $(elem).css({
        position: "absolute",
        top: 0,
        left: 0,
        width: $(elem).find(".slide").size() * clientWidth,
        height: clientHeight,
      });
    });

    // 类名初始化
    $sec
      .eq(0)
      .addClass("active")
      .end() //返回$sec 对$sec继续进行其他的操作
      .find(".slideWrapper")
      .each(function (index, elem) {
        $(elem).find(".slide").eq(0).addClass("innerActive");
      });

    //给document绑定键盘事件
    $(document).on("keydown", function (e) {
      // 垂直运动
      if (e.which == 38 || e.which == 40) {
        if (lock) {
          lock = false;
          var newTop = $w.offset().top;
          var direction = "";

          // 上运动
          if (e.which == 38 && curIndex != 0) {
            direction = "top";
            config.onLeave(curIndex,direction);
            curIndex--;
            newTop += clientHeight;
          }
          // 下运动
          if (e.which == 40 && curIndex != $sec.size() - 1) {
            direction = "bottom";
            config.onLeave(curIndex,direction);
            curIndex++;
            newTop -= clientHeight;
          }

          $w.animate(
            {
              top: newTop,
            },
            150,
            function () {
              lock = true;
              //给当前section添加active
              $sec.eq(curIndex).addClass("active");
              // 给上一个section移除active
              if (direction == "top") {
                $sec.eq(curIndex + 1).removeClass("active");
              } else if (direction == "bottom") {
                $sec.eq(curIndex - 1).removeClass("active");
              }

              //此时新页面加载完毕，执行onLoad回调函数,传递参数，当前页面索引值及运动方向
              config.onLoad(curIndex,direction);
            }
          );
        }
      }
      // 水平运动
      if (e.which == 37 || e.which == 39) {
        if (lock) {
          lock = false;
          var $sw = $sec.find(".slideWrapper");
          //.index()返回元素在其兄弟节点中的索引值
          var innerActiveIndex = $sw.find(".innerActive").index();
          var newLeft = $sw.offset().left;
          var direction = "";

          //左运动
          if (e.which == 37 && innerActiveIndex != 0) {
            direction = "left";
            config.onLeave(innerActiveIndex,direction);
            innerActiveIndex--;
            newLeft += innerWidth;
          }

          //右运动
          if (
            e.which == 39 &&
            innerActiveIndex != $sw.find(".slide").size() - 1
          ) {
            direction = "right";
            config.onLeave(innerActiveIndex,direction);
            innerActiveIndex++;
            newLeft -= innerWidth;
          }

          $sw.animate(
            {
              left: newLeft,
            },
            150,
            function () {
              lock = true;
              //给当前slide添加innerActive
              $sw.find(".slide").eq(innerActiveIndex).addClass("innerActive");
              //找到上一个slide移除innerActive
              if (direction == "left") {
                $sw
                  .find(".slide")
                  .eq(innerActiveIndex + 1)
                  .removeClass("innerActive");
              } else if (direction == "right") {
                $sw
                  .find(".slide")
                  .eq(innerActiveIndex - 1)
                  .removeClass("innerActive");
              }

              //此时新页面加载完毕，执行onLoad回调函数,传递参数，当前页面索引值及运动方向
              config.onLoad(innerActiveIndex,direction);
            }
          );
        }
      }
    });
  },
});
