var pageEngine = {
    // $w
    // colorsArray
    // slideFlag
    // $Page
    // $Slide
    init: function (selector, colorsArray) {
      this.$w = $(selector);
      this.colorsArray = colorsArray;
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
    addComponent: function (config) {
      var type = config.type;
      var component = null;
      switch (type) {
        case "base":
          component = ComponentFactory(config);
          break;
        case "super":
          component = ComponentSuperFactory(config);//其他的用户自己写的定制元素的方法
          break;
      }
      this.slideFlag? this.$Slide.append(component): this.$Page.append(component);
      return this;
    },
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
    load: function () {
      this.bindEvent();
      var self = this;
      this.$w.myFullPage({
        colorsArray: this.colorsArray,
        onLeave: function (index, direction) {
          // 找到离开section
          self.$w.find(".section").eq(index).trigger("_leave");
        },
        afterLoad: function (index, direction) {
          // 来的
          self.$w.find(".section").eq(index).trigger("_load");
        },
      });
      this.$w.find(".section").eq(0).trigger("_load");
    },
  };
  