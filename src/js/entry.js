// 使用插件
$(".wrapper").myFullPage({
  colorsArray: ["red", "blue", "green", "orange"],
  onLeave: function (index, direction) {
    // console.log(index, direction);

    // 找到离开的页面
    $('.section').eq(index).trigger('_leave');
  },
  onLoad: function (index, direction) {
    // console.log(index, direction);
    // 找到来的section
    $('.section').eq(index).trigger('_load');
  },
});


// 生成section里面的内容
function ComponentFactory(){
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


// 给每个section都添加上我们写的$Div
$('.section').each(function(index,elem){
    $(elem).append(ComponentFactory());
})

// 给每个section绑定_leave与_load事件，用来触发$Div身上的cpLeave与cpLoad函数
$('.section').on('_leave',function(){
    $(this).find('.component').trigger('cpLeave');
})

$('.section').on('_load',function(){
    $(this).find('.component').trigger('cpLoad');
})