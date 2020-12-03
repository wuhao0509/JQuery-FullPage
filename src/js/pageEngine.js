var pageEngine = {
  /* this={
    $w,
    colorsArray,
    $Page,
    slideFlag
  } */
  init: function (selector, colorsArray) {
    this.$w = $(selector);
    console.log(this.$w);
    this.colorsArray = colorsArray;
    console.log(this.colorsArray);
    this.slideFlag = false;
    return this;
  },

  addSection: function (className) {
    this.slideFlag = false;
    this.$Page = $('<div class="section"></div>').addClass(className);
    this.$Page.appendTo(this.$w);
    return this;
  },

  addSlide: function (className) {
    this.slideFlag = true;
    this.$Slide = $('<div class="slide"></div>').addClass(className);
    this.$Slide.appendTo(this.$Page);
    return this;
  },

  //给section或者slide添加component，通过slideFlag来判断addComponent操作前面是section还是slide
  addComponent: function (config) {
    // type用来选择用哪个ComponentFactory
    var type = config.type;
    var component = null;
    switch (type) {
      case "base":
        component = ComponentFactory(config);
        break;
      case "other":
        component = other(config);
        break;
    }

    this.slideFlag
      ? this.$Slide.append(component)
      : this.$Page.append(component);
    return this;
  },

  //给section绑定事件
  bindEvent: function () {
    this.$w.find(".section").on({
      _leave: function () {
        $(this).find(".component").trigger("cpLeave");
      },
      _load: function () {
        $(this).find(".component").trigger("cpLoad");
      },
    });
  },

  //当section、slide、component都添加完毕之后，触发load函数加载页面
  load: function () {
    var self = this;
    this.bindEvent();
    this.$w.myFullPage({
      colorsArray: this.colorsArray,
      onLeave: function (index, direction) {
        self.$w.find(".section").eq(index).trigger("_leave");
      },
      onLoad: function (index, direction) {
        self.$w.find(".section").eq(index).trigger("_load");
      },
    });
    this.$w.find(".section").eq(0).trigger("_load");
  },
};
