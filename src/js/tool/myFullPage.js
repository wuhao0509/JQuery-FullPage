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

        // 记录当前页面的索引 初始值0
        var curIndex = 0;

        // 加锁
        var lock = true;

        // 初始化样式
        // 给元素添加共同样式commonStyle以及单独样式
        // 某元素单独样式可以在add(该元素)后直接添加
        // 共同样式可以在所有add之后添加
        $('html')
            .add('body')
            .css({
                position: 'relative',
                overflow: 'hidden',
                margin: 0
            })
            .add($w)
            .add($sec)
            .css(commonStyle);

        $w
            .css({
                position: 'absolute',
                left: 0,
                top: 0
            })
            .find('.section')
            .each(function (index, ele) {
                // ele是dom元素
                $(ele)
                    .css({
                        backgroundColor: colorsArray[index],
                        // background:imageArray[index],
                        position: 'relative'
                    })
                    .find('.slide')
                    .css({
                        float: 'left',
                        width: clientWidth,
                        height: clientHeight,
                        position: 'relative'
                    })
                    .wrapAll('<div class="slideWrapper"></div>')
                // 给每一个section下面的slide添加一个父元素，父元素带动slide实现横向移动
            })


        // 设置slideWrapper宽高
        $sec
            .find('.slideWrapper')
            .each(function (index, ele) {
                $(ele)
                    .css({
                        width: $(ele).find('.slide').size() * clientWidth,
                        height: clientHeight,
                        position: 'absolute',
                        left: 0,
                        top: 0
                    })
            })


        // js控制移动
        // 用active标记当前显示的页面
        // 先给第一个section 给每一个section下面的第一个slide innerActive

        // 类名初始化
        $sec
            .eq(0)
            .addClass('active')
            .end()
            .find('.slideWrapper')
            .each(function (index, elem) {
                $(elem).find('.slide').eq(0).addClass('innerActive');
            })

        // 控制移动
        $(document).on('keydown', function (e) {
            // 事件对象e中的which记录键盘按键的序号
            // left 37 top 38 right 39 bottom 40

            // 垂直移动
            if (e.which == 38 || e.which == 40) {
                // 移动$w 来带动section

                // 加锁
                if (lock) {
                    lock = false;
                    // 计算wrapper相对于文档顶部的距离 一开始newTop值为0
                    var newTop = $w.offset().top;
                    var direction = '';
                    if (e.which == 38 && curIndex != 0) {
                        // 先更新index
                        direction = 'top';
                        config.onLeave(curIndex,direction);
                        curIndex--;
                        newTop += clientHeight;
                    } else if (e.which == 40 && curIndex != $sec.size() - 1) {
                        direction = 'bottom';
                        config.onLeave(curIndex,direction);
                        curIndex++;
                        newTop -= clientHeight;
                    }

                    // 移动wrapper
                    $w.animate({
                        top: newTop
                    }, 350, 'swing', function () {
                        lock = true;

                        // 给当前页面添加active，同时给上一个页面删除active
                        $sec.eq(curIndex).addClass('active');
                        if (direction == 'top') {
                            $sec.eq(curIndex + 1).removeClass('active');
                        } else if (direction == 'bottom') {
                            $sec.eq(curIndex - 1).removeClass('active');
                        }

                        config.onLoad(curIndex,direction);
                    })
                }

            }

            // 水平移动
            if (e.which == 37 || e.which == 39) {
                // 移动slideWrapper 来带动slide

                if (lock) {
                    lock = false;
                    var $sw = $('.active').find('.slideWrapper');
                    var innerActiveIndex = $sw.find('.innerActive').index();
                    var newLeft = $sw.offset().left;
                    var direction = '';
                    if (e.which == 37 && innerActiveIndex != 0) {
                        // 左移
                        direction = 'left';
                        config.onLeave(innerActiveIndex,direction);
                        innerActiveIndex--;
                        newLeft += clientWidth;
                    } else if (e.which == 39 && innerActiveIndex != $sw.find('.slide').size()-1) {
                        // 右移
                        direction = 'right';
                        config.onLeave(innerActiveIndex,direction);
                        innerActiveIndex++;
                        newLeft -= clientWidth;
                    }

                    // 移动slideWrapper

                    $sw.animate({
                        left: newLeft
                    }, 350, 'swing', function () {
                        lock = true;

                        $sw.find('.slide').eq(innerActiveIndex).addClass('innerActive');
                        if (direction == 'left') {
                            $sw.find('.slide').eq(innerActiveIndex+1).removeClass('innerActive');
                        }else if(direction == 'right'){
                            $sw.find('.slide').eq(innerActiveIndex-1).removeClass('innerActive');
                        }
                        config.onLoad(innerActiveIndex,direction);
                    })

                }

            }
        })
    }
})