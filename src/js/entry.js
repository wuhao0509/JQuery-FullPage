$(".wrapper").myFullPage({
  colorsArray: ["red", "green", "blue", "#008c8c"],
  onLeave: function (index, direction) {
    $('.section').eq(index).trigger("_leave");
  },
  onLoad: function (index, direction) {
    $('.section').eq(index).trigger("_load");
  },
});

// 创建元素
function ComponentFactory() {
    var $Div = $('<div class="component" style="display: none;"><span></span></div>');
    $Div.find('span').text('duyi');
    $Div.on('cpLeave',function(){
        $(this).fadeOut();
    })
    $Div.on('cpLoad',function(){
        $(this).fadeIn();
    })
    return $Div;
}

// 给section添加元素
$('.section').each(function(index,elem){
    $(elem).append(ComponentFactory());
})

//给section绑定事件
$('.section').on('_leave',function(){
    $(this).find('.component').trigger('cpLeave');
}) 

$('.section').on('_load',function(){
    $(this).find('.component').trigger('cpLoad');
}) 




