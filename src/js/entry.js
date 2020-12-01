// 使用插件
$(".wrapper").myFullPage({
  colorsArray: ["red", "blue", "green", "orange"],
  onLeave: function (index, direction) {
    console.log(index, direction);
  },
  onLoad: function (index, direction) {
    console.log(index, direction);
  },
});
