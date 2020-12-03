// 使用页面引擎pageEngine.js之前
// $(".wrapper").myFullPage({
//   colorsArray: ["red", "green", "blue", "#008c8c"],
//   onLeave: function (index, direction) {
//     $(".section").eq(index).trigger("_leave");
//   },
//   onLoad: function (index, direction) {
//     $(".section").eq(index).trigger("_load");
//   },
// });

// // 创建元素
// // function ComponentFactory() {
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

// // 给section添加元素
// $(".section").each(function (index, elem) {
//   $(elem).append(
//     ComponentFactory({
//       className: "",
//       content: "<span>jQuery-fullPage</span>",
//       css: {
//         // display: "none",
//         opacity: 0,
//         width: "100%",
//         height: "100%",
//         position: "absolute",
//         left: 0,
//         right: 0,
//         top: 0,
//         bottom: 0,
//         margin: "auto",
//         "text-align": "center",
//         "font-size": "100px",
//         // 'vertical-align':'100%'
//       },
//       event: {
//         click: function () {
//           console.log("click事件生效");
//         },
//       },
//       animation: {
//         animateIn: {
//           opacity: 1,
//           top: 500,
//         },
//         animateOut: {
//           opacity: 0,
//           top: 0,
//         },
//         delay: 100,
//         movement: "swing",
//         inCallback: function () {},
//         outCallback: function () {},
//       },
//     })
//   );
// });

// //给section绑定事件
// $(".section").on("_leave", function () {
//   $(this).find(".component").trigger("cpLeave");
// });

// $(".section").on("_load", function () {
//   $(this).find(".component").trigger("cpLoad");
// });

// 使用pageEngine
pageEngine
  .init(".wrapper",['red','blue','green','#008c8c'])
  .addSection()
  .addSlide()
  .addComponent({
    type:'base',
    className: "",
    content: "<span>jQuery-fullPage</span>",
    css: {
      // display: "none",
      opacity: 1,
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: "auto",
      "text-align": "center",
      "font-size": "100px",
      // 'vertical-align':'100%'
    },
    event: {
      click: function () {
        console.log("click事件生效");
      },
    },
    animation: {
      animateIn: {
        opacity: 1,
        top: 500,
      },
      animateOut: {
        opacity: 0,
        top: 0,
      },
      delay: 100,
      movement: "swing",
      inCallback: function () {},
      outCallback: function () {},
    },
  })
  .addSection()
  .addSection()
  .addSlide()
  .addComponent({
    type:'base',
    className: "",
    content: "<span>jQuery-fullPage</span>",
    css: {
      // display: "none",
      opacity: 1,
      width: "100%",
      height: "100%",
      position: "absolute",
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      margin: "auto",
      "text-align": "center",
      "font-size": "100px",
      // 'vertical-align':'100%'
    },
    event: {
      click: function () {
        console.log("click事件生效");
      },
    },
    animation: {
      animateIn: {
        opacity: 1,
        top: 500,
      },
      animateOut: {
        opacity: 0,
        top: 0,
      },
      delay: 100,
      movement: "swing",
      inCallback: function () {},
      outCallback: function () {},
    },
  })
  .addSection()
  .load();
