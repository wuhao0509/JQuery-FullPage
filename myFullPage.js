// fullPage插件实际上是给jQuery添加一个实例方法
$.fn.extend({
    myFullPage: function (config) {
        var colorsArray = config.colorsArray;
        // $(this)是一个jQuery对象，如果每次用$(this)，那么每次都会执行$函数，耗费性能，
        // 所以我们可以将一个$(this)赋值给一个变量 这个变量是一个引用值，后面使用$(this)时，
        // 都使用的是第一个$(this)
        var $w = $(this);
        var $sec = $w.find('.section');


        // 获取边框盒宽高
        var clientWidth = $(window).outerWidth();
        var clientHeight = $(window).outerHeight();

        // 将使用fullPage插件固定结构的样式中重复的样式封装成一个对象
        var commonStyle = {
            width: '100%',
            height: '100%'
        }

        // 初始化样式
        // 给元素添加共同样式commonStyle以及单独样式
        // 某元素单独样式可以在add(该元素)后直接添加
        // 共同样式可以在所有add之后添加
        $('html').add('body').css({
            position: 'relative',
            // overflow: 'hidden',
            margin: 0
        }).add($w).add($sec).css(commonStyle);

        $w.css({
            position: 'absolute',
            left: 0,
            top: 0
        }).find('.section').each(function (index, ele) {
            // ele是dom元素
            $(ele).css({
                backgroundColor: colorsArray[index],
                position: 'relative'
            }).find('.slide').css({
                float: 'left',
                width: clientWidth,
                height: clientHeight,
                position:'relative'
            }).wrapAll('<div class="slideWrapper"></div>')
            // 给每一个section下面的slide添加一个父元素，父元素带动slide实现横向移动
        })


        // 设置slideWrapper宽高
        $sec.find('.slideWrapper').each(function (index,ele) {
            $(ele).css({
                width:$(ele).find('.slide').size()*clientWidth,
                height:clientHeight
            })
        })
    }
})