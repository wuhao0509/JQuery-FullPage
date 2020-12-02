// // 使用插件
// $(".wrapper").myFullPage({
//   colorsArray: ["red", "blue", "green", "orange"],
//   onLeave: function (index, direction) {
//     // console.log(index, direction);

//     // 找到离开的页面
//     $('.section').eq(index).trigger('_leave');
//   },
//   onLoad: function (index, direction) {
//     // console.log(index, direction);
//     // 找到来的section
//     $('.section').eq(index).trigger('_load');
//   },
// });

// // // 生成section里面的内容
// // 按照这种方式如果我们想要在不同的section下添加不用的dom 那么就需要声明多个ComponentFactory
// // 每个ComponentFactory都创建一个section的子元素，这样太过于死板，而且如果内容很多会导致代码冗余
// // 所以我们将该函数抽离成一个单独的文件，该文件中先生成一个基础的div元素，至于这个div元素用户想要写成什么样子，直接通过参数设置即可
// // function ComponentFactory(config){
// //     var $Div = $('<div class="component" style="display: none;"><span></span></div>');
// //     $Div.find('span').text('duyi');

// //     $Div.on('cpLeave',function(){
// //         $(this).fadeOut();
// //     })

// //     $Div.on('cpLoad',function(){
// //         $(this).fadeIn();
// //     })

// //     return $Div;
// // }

// // 给每个section都添加上我们写的$Div
// $('.section').each(function(index,elem){
//     $(elem).append(ComponentFactory({
//         type: 'base',
//         className: 'duyi',
//         width: 522,
//         height: 336,
//         text: '渡一教育创立于2015年！ 在成哥 邓哥 彤哥的带领下已经向着高端编程教育公司大踏步的，渡一 Dream Factory',
//         center: true,
//         css: {
//             position: 'absolute',
//             opacity: 0,
//             top: 0,
//             backgroundImage: 'url(./src/img/dialog.jpg)',
//             backgroundSize: '100% 100%',
//             padding: '10px 15px 10px 15px',
//             textAlign: 'justify',
//             fontSize: '18px',
//             fontWeight: '900',
//             lineHeight: '25px'
//         },
//         animateIn: {
//             opacity: 1,
//             top: 240,
//         },
//         animateOut: {
//             opacity: 0,
//             top: 0
//         },
//         delay: 1000,
//         event: {
//             click: function () {
//                 alert($(this).text());
//             }
//         }
//     }));
// })

// // 给每个section绑定_leave与_load事件，用来触发$Div身上的cpLeave与cpLoad函数
// $('.section').on('_leave',function(){
//     $(this).find('.component').trigger('cpLeave');
// })

// $('.section').on('_load',function(){
//     $(this).find('.component').trigger('cpLoad');
// })

pageEngine
  .init(".wrapper", ["red", "blue", "green"])
  .addSection("oneSection")
  .addComponent({
    type: "base",
    className: "ceshi",
    width: "100%",
    height: "100%",
    text:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur commodi, aspernatur, excepturi odio possimus doloribus corrupti similique voluptates voluptate sunt eligendi, numquam voluptatem fuga beatae vitae deleniti ullam repellendus laudantium. Dicta, est ipsam. Unde quaerat ratione doloremque eum, perspiciatis explicabo dicta a quas culpa adipisci sunt ipsa, ipsum in. Quod voluptatibus quia dolorum culpa. Quas tempora praesentium commodi quidem atque rerum porro dolore quisquam totam aliquid veniam quae aperiam excepturi rem eaque illo blanditiis soluta enim quam, architecto dolorem ratione. Veniam minima aliquid corrupti libero placeat quasi reiciendis doloremque, deserunt, iusto quaerat qui unde nam consequatur perspiciatis laudantium porro blanditiis.",
    center: true,
    css: {
      position: "absolute",
      opacity: 0.5,
      left:0,
      top: 0,
      backgroundImage: "url(src/img/p1.jpeg)",
      backgroundSize: "100% 100%",
      padding: "10px 15px 10px 15px",
      textAlign: "justify",
      fontSize: "18px",
      fontWeight: "900",
      lineHeight: "25px",
    },
    animateIn: {
      opacity: 1,
      bottom: 140,
    },
    animateOut: {
      opacity: 0,
      bottom: 0,
    },
    delay: 200,
    event: {
      click: function () {
        alert($(this).text());
      },
    },
  })
  .addSection("oneSection")
  .addSection("oneSection")
  .load();
