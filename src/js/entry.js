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
  .init(".wrapper", ["black", "black", "black", "black"])
  .addSection()
  .addComponent({
    type: "base",
    className: "component",
    content: `
        <div class="content">
            <span>jQuery-MyFullPage项目展示</span>
        </div>
    `,
    contentCss: {
      width: "100%",
      height: "100%",
      "font-size": "50px",
      display: "flex",
      "flex-direction": "row",
      "justify-content": "center",
      "align-items": "center",
      position: "absolute",
      left: "0",
      top: "-100%",
    },
    css: {
      width: "100%",
      height: "100%",
      "background-image": "url('src/img/1.jpg')",
      "background-repeat": "no-repeat",
      opacity: "0",
    },
    animation: {
      animateIn: {
        opacity: 1,
      },
      contentIn: {
        top: "0",
      },
      animateOut: {
        opacity: 0,
      },
      contentOut: {
        top: "-100%",
      },
    },
  })
  .addSection()
  .addComponent({
    type: "base",
    className: "component",
    content: `
        <div class="content">
            <span>slide1</span>
        </div>
    `,
    contentCss: {
      width: "100%",
      height: "100%",
      "font-size": "50px",
      display: "flex",
      "flex-direction": "row",
      "justify-content": "center",
      "align-items": "center",
      position: "absolute",
      left: "0",
      top: "-100%",
    },
    css: {
      width: "100%",
      height: "100%",
      "background-image": "url('src/img/2.jpg')",
      "background-repeat": "no-repeat",
      opacity: "0",
    },
    animation: {
      animateIn: {
        opacity: 1,
      },
      contentIn: {
        top: "0",
      },
      animateOut: {
        opacity: 0,
      },
      contentOut: {
        top: "-100%",
      },
    },
  })
  .addSection()
  .addComponent({
    type: "base",
    className: "component",
    content: `
        <div class="content">
            <img src="src/img/fullPage原理.png"></img>
        </div>
    `,
    contentCss: {
      width: "100%",
      height: "100%",
      "font-size": "50px",
      display: "flex",
      "flex-direction": "row",
      "justify-content": "center",
      "align-items": "center",
      position: "absolute",
      left: "0",
      top: "-100%",
    },
    css: {
      width: "100%",
      height: "100%",
      "background-image": "url('src/img/3.jpg')",
      "background-repeat": "no-repeat",
      opacity: "0",
    },
    animation: {
      animateIn: {
        opacity: 1,
      },
      contentIn: {
        top: "0",
      },
      animateOut: {
        opacity: 0,
      },
      contentOut: {
        top: "-100%",
      },
    },
  })
  .addSection()
  .addComponent({
    type: "base",
    className: "component",
    content: `
        <div class="content">
            <span>第四屏</span>
        </div>
    `,
    contentCss: {
      width: "100%",
      height: "100%",
      "font-size": "50px",
      display: "flex",
      "flex-direction": "row",
      "justify-content": "center",
      "align-items": "center",
      position: "absolute",
      left: "0",
      top: "-100%",
    },
    css: {
      width: "100%",
      height: "100%",
      "background-image": "url('src/img/4.jpg')",
      "background-repeat": "no-repeat",
      opacity: 0,
    },
    animation: {
      animateIn: {
        opacity: 1,
      },
      contentIn: {
        top: "0",
      },
      animateOut: {
        opacity: 0,
      },
      contentOut: {
        top: "-100%",
      },
    },
  })
  .load();
