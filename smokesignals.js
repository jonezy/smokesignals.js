// A large portion of the boilerplate code at the top is lifted directly from backbone.js
(function () {

  // we'll use root in place of window.
  var root = this;

  // top level namespace
  var Smokesignals = root.Smokesignals = {};

  // underscore is required.
  var _ = root._;
  if (!_ && (typeof require !== 'undefined')) _ = require('underscore');

  // handles dom stuff
  var $ = root.jQuery || root.Zepto || root.ender;

  // main entry point, pass in options here.
  var Signal = Smokesignals.Signal = function (options) {
    var defaults = {
      el: "#flash",
      hideTimeout: 8000
    }
    

    this.options = _.extend(defaults, options);
    this.options.contentEl = this.options.el + "_content";
  };

  // this method of attaching methods to the Signal object is also lifted from backbone.js
  _.extend(Smokesignals.Signal.prototype, {
    flash: function (message, cssClass) {
      var containerElement = $(this.options.el);
      var contentElement = $(this.options.contentEl);
      
      contentElement.html(message);
      containerElement.removeClass().addClass(cssClass).slideDown('med');

      containerElement.children('a[data-dismiss]').click(function () {
        containerElement.slideUp("med")
      });

      window.setTimeout(function () {
        containerElement.fadeOut("slow");
      }, this.options.hideTimeout);
    }
  });
}).call(this);