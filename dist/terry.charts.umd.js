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

  var PI = Math.PI;
  var cos = Math.cos;
  var sin = Math.sin;

  var Star = function Star(ctx, opts) {
    classCallCheck(this, Star);

    this.options = opts || {};
    var n = this.options.shape.n;
    if (!n || n < 2) return;
    var x = this.options.shape.cx;
    var y = this.options.shape.cy;
    var r = this.options.shape.r;
    var r0 = this.options.shape.r0;

    if (r0 == null) {
      r0 = n > 4 ? r * cos(2 * PI / n) / cos(PI / n) : r / 3;
    }

    var dStep = PI / n;
    var deg = -PI / 2;
    var xStart = x + r * cos(deg);
    var yStart = y + r * sin(deg);
    deg += dStep;
    ctx.moveTo(xStart, yStart);

    for (var i = 0, end = n * 2 - 1, ri; i < end; i++) {
      ri = i % 2 === 0 ? r0 : r;
      ctx.lineTo(x + ri * cos(deg), y + ri * sin(deg));
      deg += dStep;
    }

    ctx.closePath();
    ctx.fillStyle = this.options.style ? this.options.style.fill : '';
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : '';
    this.options.style && ctx.fill();
    ctx.stroke();
  };

  var sin$1 = Math.sin;
  var cos$1 = Math.cos;
  var radian = Math.PI / 180;

  var Rose = function Rose(ctx, opts) {
    classCallCheck(this, Rose);

    this.options = opts || {};
    var shape = this.options.shape;
    var R = shape.r;
    var k = shape.k;
    var n = shape.n;
    var x0 = shape.cx;
    var y0 = shape.cy;
    var x;
    var y;
    var r;
    ctx.moveTo(x0, y0);

    for (var i = 0, len = R.length; i < len; i++) {
      r = R[i];

      for (var j = 0; j <= 360 * n; j++) {
        x = r * sin$1(k / n * j % 360 * radian) * cos$1(j * radian) + x0;
        y = r * sin$1(k / n * j % 360 * radian) * sin$1(j * radian) + y0;
        ctx.lineTo(x, y);
      }
    }

    ctx.fillStyle = this.options.style ? this.options.style.fill : '';
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : '';
    this.options.style && ctx.fill();
    ctx.stroke();
  };

  var PI$1 = Math.PI;
  var PI2 = PI$1 * 2;
  var mathSin = Math.sin;
  var mathCos = Math.cos;
  var mathACos = Math.acos;
  var mathATan2 = Math.atan2;
  var mathAbs = Math.abs;
  var mathSqrt = Math.sqrt;
  var mathMax = Math.max;
  var mathMin = Math.min;
  var e = 1e-4;

  function modPI2(radian) {
    // It's much more stable to mod N instedof PI
    var n = Math.round(radian / PI$1 * 1e8) / 1e8;
    return n % 2 * PI$1;
  }

  function normalizeArcAngles(angles, anticlockwise) {
    var newStartAngle = modPI2(angles[0]);

    if (newStartAngle < 0) {
      // Normlize to 0 - PI2
      newStartAngle += PI2;
    }

    var delta = newStartAngle - angles[0];
    var newEndAngle = angles[1];
    newEndAngle += delta; // https://github.com/chromium/chromium/blob/c20d681c9c067c4e15bb1408f17114b9e8cba294/third_party/blink/renderer/modules/canvas/canvas2d/canvas_path.cc#L184
    // Is circle

    if (!anticlockwise && newEndAngle - newStartAngle >= PI2) {
      newEndAngle = newStartAngle + PI2;
    } else if (anticlockwise && newStartAngle - newEndAngle >= PI2) {
      newEndAngle = newStartAngle - PI2;
    } // Make startAngle < endAngle when clockwise, otherwise endAngle < startAngle.
    // The sweep angle can never been larger than P2.
    else if (!anticlockwise && newStartAngle > newEndAngle) {
        newEndAngle = newStartAngle + (PI2 - modPI2(newStartAngle - newEndAngle));
      } else if (anticlockwise && newStartAngle < newEndAngle) {
        newEndAngle = newStartAngle - (PI2 - modPI2(newEndAngle - newStartAngle));
      }

    angles[0] = newStartAngle;
    angles[1] = newEndAngle;
  }

  function intersect(x0, y0, x1, y1, x2, y2, x3, y3) {
    var x10 = x1 - x0;
    var y10 = y1 - y0;
    var x32 = x3 - x2;
    var y32 = y3 - y2;
    var t = y32 * x10 - x32 * y10;

    if (t * t < e) {
      return;
    }

    t = (x32 * (y0 - y2) - y32 * (x0 - x2)) / t;
    return [x0 + t * x10, y0 + t * y10];
  }

  function computeCornerTangents(x0, y0, x1, y1, radius, cr, clockwise) {
    var x01 = x0 - x1;
    var y01 = y0 - y1;
    var lo = (clockwise ? cr : -cr) / mathSqrt(x01 * x01 + y01 * y01);
    var ox = lo * y01;
    var oy = -lo * x01;
    var x11 = x0 + ox;
    var y11 = y0 + oy;
    var x10 = x1 + ox;
    var y10 = y1 + oy;
    var x00 = (x11 + x10) / 2;
    var y00 = (y11 + y10) / 2;
    var dx = x10 - x11;
    var dy = y10 - y11;
    var d2 = dx * dx + dy * dy;
    var r = radius - cr;
    var s = x11 * y10 - x10 * y11;
    var d = (dy < 0 ? -1 : 1) * mathSqrt(mathMax(0, r * r * d2 - s * s));
    var cx0 = (s * dy - dx * d) / d2;
    var cy0 = (-s * dx - dy * d) / d2;
    var cx1 = (s * dy + dx * d) / d2;
    var cy1 = (-s * dx + dy * d) / d2;
    var dx0 = cx0 - x00;
    var dy0 = cy0 - y00;
    var dx1 = cx1 - x00;
    var dy1 = cy1 - y00; // Pick the closer of the two intersection points
    // TODO: Is there a faster way to determine which intersection to use?

    if (dx0 * dx0 + dy0 * dy0 > dx1 * dx1 + dy1 * dy1) {
      cx0 = cx1;
      cy0 = cy1;
    }

    return {
      cx: cx0,
      cy: cy0,
      x01: -ox,
      y01: -oy,
      x11: cx0 * (radius / r - 1),
      y11: cy0 * (radius / r - 1)
    };
  }

  function buildPath(ctx, shape) {
    var radius = mathMax(shape.r, 0);
    var innerRadius = mathMax(shape.r0 || 0, 0);
    var hasRadius = radius > 0;
    var hasInnerRadius = innerRadius > 0;

    if (!hasRadius && !hasInnerRadius) {
      return;
    }

    if (!hasRadius) {
      // use innerRadius as radius if no radius
      radius = innerRadius;
      innerRadius = 0;
    }

    if (innerRadius > radius) {
      // swap, ensure that radius is always larger than innerRadius
      var tmp = radius;
      radius = innerRadius;
      innerRadius = tmp;
    }

    var clockwise = !!shape.clockwise;
    var startAngle = shape.startAngle;
    var endAngle = shape.endAngle; // FIXME: whether normalizing angles is required?

    var tmpAngles = [startAngle, endAngle];
    normalizeArcAngles(tmpAngles, !clockwise);
    var arc = mathAbs(tmpAngles[0] - tmpAngles[1]);
    var x = shape.cx;
    var y = shape.cy;
    var cornerRadius = shape.cornerRadius || 0;
    var innerCornerRadius = shape.innerCornerRadius || 0; // is a point

    if (!(radius > e)) {
      ctx.moveTo(x, y);
    } // is a circle or annulus
    else if (arc > PI2 - e) {
        ctx.moveTo(x + radius * mathCos(startAngle), y + radius * mathSin(startAngle));
        ctx.arc(x, y, radius, startAngle, endAngle, !clockwise);

        if (innerRadius > e) {
          ctx.moveTo(x + innerRadius * mathCos(endAngle), y + innerRadius * mathSin(endAngle));
          ctx.arc(x, y, innerRadius, endAngle, startAngle, clockwise);
        }
      } // is a circular or annular sector
      else {
          var halfRd = mathAbs(radius - innerRadius) / 2;
          var cr = mathMin(halfRd, cornerRadius);
          var icr = mathMin(halfRd, innerCornerRadius);
          var cr0 = icr;
          var cr1 = cr;
          var xrs = radius * mathCos(startAngle);
          var yrs = radius * mathSin(startAngle);
          var xire = innerRadius * mathCos(endAngle);
          var yire = innerRadius * mathSin(endAngle);
          var xre;
          var yre;
          var xirs;
          var yirs; // draw corner radius

          if (cr > e || icr > e) {
            xre = radius * mathCos(endAngle);
            yre = radius * mathSin(endAngle);
            xirs = innerRadius * mathCos(startAngle);
            yirs = innerRadius * mathSin(startAngle); // restrict the max value of corner radius

            if (arc < PI$1) {
              var it = intersect(xrs, yrs, xirs, yirs, xre, yre, xire, yire);

              if (it) {
                var x0 = xrs - it[0];
                var y0 = yrs - it[1];
                var x1 = xre - it[0];
                var y1 = yre - it[1];
                var a = 1 / mathSin(mathACos((x0 * x1 + y0 * y1) / (mathSqrt(x0 * x0 + y0 * y0) * mathSqrt(x1 * x1 + y1 * y1))) / 2);
                var b = mathSqrt(it[0] * it[0] + it[1] * it[1]);
                cr0 = mathMin(icr, (innerRadius - b) / (a - 1));
                cr1 = mathMin(cr, (radius - b) / (a + 1));
              }
            }
          } // the sector is collapsed to a line


          if (!(arc > e)) {
            ctx.moveTo(x + xrs, y + yrs);
          } // the outer ring has corners
          else if (cr1 > e) {
              var ct0 = computeCornerTangents(xirs, yirs, xrs, yrs, radius, cr1, clockwise);
              var ct1 = computeCornerTangents(xre, yre, xire, yire, radius, cr1, clockwise);
              ctx.moveTo(x + ct0.cx + ct0.x01, y + ct0.cy + ct0.y01); // Have the corners merged?

              if (cr1 < cr) {
                ctx.arc(x + ct0.cx, y + ct0.cy, cr1, mathATan2(ct0.y01, ct0.x01), mathATan2(ct1.y01, ct1.x01), !clockwise);
              } else {
                // draw the two corners and the ring
                ctx.arc(x + ct0.cx, y + ct0.cy, cr1, mathATan2(ct0.y01, ct0.x01), mathATan2(ct0.y11, ct0.x11), !clockwise);
                ctx.arc(x, y, radius, mathATan2(ct0.cy + ct0.y11, ct0.cx + ct0.x11), mathATan2(ct1.cy + ct1.y11, ct1.cx + ct1.x11), !clockwise);
                ctx.arc(x + ct1.cx, y + ct1.cy, cr1, mathATan2(ct1.y11, ct1.x11), mathATan2(ct1.y01, ct1.x01), !clockwise);
              }
            } // the outer ring is a circular arc
            else {
                ctx.moveTo(x + xrs, y + yrs);
                ctx.arc(x, y, radius, startAngle, endAngle, !clockwise);
              } // no inner ring, is a circular sector


          if (!(innerRadius > e) || !(arc > e)) {
            ctx.lineTo(x + xire, y + yire);
          } // the inner ring has corners
          else if (cr0 > e) {
              var _ct = computeCornerTangents(xire, yire, xre, yre, innerRadius, -cr0, clockwise);

              var _ct2 = computeCornerTangents(xrs, yrs, xirs, yirs, innerRadius, -cr0, clockwise);

              ctx.lineTo(x + _ct.cx + _ct.x01, y + _ct.cy + _ct.y01); // Have the corners merged?

              if (cr0 < icr) {
                ctx.arc(x + _ct.cx, y + _ct.cy, cr0, mathATan2(_ct.y01, _ct.x01), mathATan2(_ct2.y01, _ct2.x01), !clockwise);
              } // draw the two corners and the ring
              else {
                  ctx.arc(x + _ct.cx, y + _ct.cy, cr0, mathATan2(_ct.y01, _ct.x01), mathATan2(_ct.y11, _ct.x11), !clockwise);
                  ctx.arc(x, y, innerRadius, mathATan2(_ct.cy + _ct.y11, _ct.cx + _ct.x11), mathATan2(_ct2.cy + _ct2.y11, _ct2.cx + _ct2.x11), clockwise);
                  ctx.arc(x + _ct2.cx, y + _ct2.cy, cr0, mathATan2(_ct2.y11, _ct2.x11), mathATan2(_ct2.y01, _ct2.x01), !clockwise);
                }
            } // the inner ring is just a circular arc
            else {
                // FIXME: if no lineTo, svg renderer will perform an abnormal drawing behavior.
                ctx.lineTo(x + xire, y + yire);
                ctx.arc(x, y, innerRadius, endAngle, startAngle, clockwise);
              }
        }

    ctx.closePath();
  }

  var Sector = function Sector(ctx, opts) {
    classCallCheck(this, Sector);

    this.options = opts || {};
    var shape = this.options.shape;
    buildPath(ctx, shape);
    ctx.fillStyle = this.options.style ? this.options.style.fill : '';
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : '';
    this.options.style && ctx.fill();
    ctx.stroke();
  };

  var Heart = function Heart(ctx, opts) {
    classCallCheck(this, Heart);

    this.options = opts || {};
    var shape = this.options.shape;
    var x = shape.cx;
    var y = shape.cy;
    var a = shape.width;
    var b = shape.height;
    ctx.moveTo(x, y);
    ctx.bezierCurveTo(x + a / 2, y - b * 2 / 3, x + a * 2, y + b / 3, x, y + b);
    ctx.bezierCurveTo(x - a * 2, y + b / 3, x - a / 2, y - b * 2 / 3, x, y);
    ctx.fillStyle = this.options.style ? this.options.style.fill : '';
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : '';
    this.options.style && ctx.fill();
    ctx.stroke();
  };

  var TerryCharts = /*#__PURE__*/function () {
    function TerryCharts(dom) {
      var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

      classCallCheck(this, TerryCharts);

      if (typeof dom === 'string') {
        dom = document.querySelectorAll(dom);
      }

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
    }, {
      key: "star",
      value: function star() {
        new Star(this.ctx, this.options);
      }
    }, {
      key: "rose",
      value: function rose() {
        new Rose(this.ctx, this.options);
      }
    }, {
      key: "sector",
      value: function sector() {
        new Sector(this.ctx, this.options);
      }
    }, {
      key: "heart",
      value: function heart() {
        new Heart(this.ctx, this.options);
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
