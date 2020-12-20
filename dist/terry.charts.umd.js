(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.TerryCharts = {}));
}(this, (function (exports) { 'use strict';

  function _classCallCheck(instance, Constructor) {
    if (!(instance instanceof Constructor)) {
      throw new TypeError("Cannot call a class as a function");
    }
  }

  var classCallCheck = _classCallCheck;

  function _defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  function _createClass(Constructor, protoProps, staticProps) {
    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
    if (staticProps) _defineProperties(Constructor, staticProps);
    return Constructor;
  }

  var createClass = _createClass;

  var Line = function Line(ctx, opts) {
    classCallCheck(this, Line);

    this.options = opts || {};
    this.x1 = this.options.shape.x1;
    this.x2 = this.options.shape.x2;
    this.y1 = this.options.shape.y1;
    this.y2 = this.options.shape.y2;
    ctx.beginPath();
    ctx.moveTo(this.x1, this.y1);
    ctx.lineCap = this.options.shape.cap;
    ctx.lineWidth = this.options.shape.width;
    ctx.lineTo(this.x2, this.y2);
    ctx.fillStyle = this.options.style ? this.options.style.fill : '';
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : '';
    this.options.style && ctx.fill();
    ctx.stroke();
  };

  var Rect = function Rect(ctx, opts) {
    classCallCheck(this, Rect);

    this.options = opts || {};
    ctx.rect(this.options.shape.x, this.options.shape.y, this.options.shape.width, this.options.shape.height);
    ctx.fillStyle = this.options.style ? this.options.style.fill : '';
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : '';
    this.options.style && ctx.fill();
    ctx.stroke();
  };

  var Circle = function Circle(ctx, opts) {
    classCallCheck(this, Circle);

    this.options = opts || {};
    ctx.arc(this.options.shape.x, this.options.shape.y, this.options.shape.r, this.options.shape.startAngle, this.options.shape.endAngle, this.options.shape.clockwise);
    ctx.fillStyle = this.options.style ? this.options.style.fill : '';
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : '';
    this.options.style && ctx.fill();
    ctx.stroke();
  };

  var BezierCurve = function BezierCurve(ctx, opts) {
    classCallCheck(this, BezierCurve);

    this.options = opts || {};
    ctx.bezierCurveTo(this.options.shape.cx1, this.options.shape.cy1, this.options.shape.cx2, this.options.shape.cy2, this.options.shape.x, this.options.shape.y);
    ctx.fillStyle = this.options.style ? this.options.style.fill : '';
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : '';
    this.options.style && ctx.fill();
    ctx.stroke();
  };

  var TerryCharts = /*#__PURE__*/function () {
    function TerryCharts(dom) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      classCallCheck(this, TerryCharts);

      this.dom = dom; // this.id = uuidv4();

      this.options = opts;
      var rendererType = opts.rednerer || 'canvas';

      if (rendererType === 'canvas') {
        var canvas = document.createElement('canvas');
        canvas.width = opts.width || 400;
        canvas.height = opts.height || 400;
        this.ctx = canvas.getContext('2d');
        this.dom.appendChild(canvas);
      }
    }

    createClass(TerryCharts, [{
      key: "line",
      value: function line() {
        new Line(this.ctx, this.options);
      }
    }, {
      key: "rect",
      value: function rect() {
        new Rect(this.ctx, this.options);
      }
    }, {
      key: "circle",
      value: function circle() {
        new Circle(this.ctx, this.options);
      }
    }, {
      key: "bezierCurve",
      value: function bezierCurve() {
        new BezierCurve(this.ctx, this.options);
      }
    }]);

    return TerryCharts;
  }();

  function init(dom, opts) {
    var instance = new TerryCharts(dom, opts);
    return instance;
  }

  exports.init = init;

  Object.defineProperty(exports, '__esModule', { value: true });

})));
