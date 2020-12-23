
import {
  Line,
  Rect,
  Circle,
  BezierCurve,
  Star,
  Rose,
  Sector,
  Heart,
  RectSvg,
  LineSvg,
  CircleSvg,
  EllipseSvg,
  PolyType
} from '../graphic/index.js'
import { v4 as uuidv4 } from 'uuid'
class TerryCharts {
  constructor(dom, opts = {}) {

    if (typeof dom === 'string') {
      dom = document.querySelector(dom)
    }
    this.dom = dom
    this.id = `tchart${uuidv4({
      random: [
        0x10,
        0x91,
        0x56,
        0xbe,
        0xc4,
        0xfb,
        0xc1,
        0xea,
        0x71,
        0xb4,
        0xef,
        0xe1,
        0x67,
        0x1c,
        0x58,
        0x36,
      ],
    })}`
    this.options = opts
    this.rendererType = opts.rednerer || 'canvas';

    if (this.rendererType === 'canvas') {
      const canvas = document.createElement('canvas')
      canvas.width = opts.width || 400
      canvas.height = opts.height || 400
      canvas.style.borderLeft = this.options.border ? `${this.options.border.borderWidth}px ${this.options.border.borderType} ${this.options.border.borderColor}` : ''
      canvas.style.borderBottom = this.options.border ? `${this.options.border.borderWidth}px ${this.options.border.borderType} ${this.options.border.borderColor}` : ''
      canvas.style.backgroundColor = this.options.backgroundColor || 'transparent'
      this.ctx = canvas.getContext('2d')
      this.ctx.save();
      this.ctx.translate(0, this.options.height || 400);
      this.ctx.rotate(this._getRad(180));
      this.ctx.scale(-1, 1);
      this.dom.appendChild(canvas)
    }
    if (this.rendererType === 'svg') {
      this.svgDom = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      this.svgDom.setAttribute('width', this.options.width || 200)
      this.svgDom.setAttribute('height', this.options.height || 200)
      this.svgDom.setAttribute('viewBox', `0 0 400 400`)
    }

  }
  _getRad (degree) {
    return degree / 180 * Math.PI;
  }
  line () {
    if (this.rendererType === 'canvas') {
      new Line(this.ctx, this.options)
    }
    if (this.rendererType === 'svg') {
      new LineSvg(this.dom, this.svgDom, this.options)
    }
  }

  rect () {
    if (this.rendererType === 'canvas') {
      new Rect(this.ctx, this.options)
    }
    if (this.rendererType === 'svg') {
      new RectSvg(this.dom, this.svgDom, this.options)
    }

  }

  circle () {
    if (this.rendererType === 'canvas') {
      new Circle(this.ctx, this.options)
    }
    if (this.rendererType === 'svg') {
      new CircleSvg(this.dom, this.svgDom, this.options)
    }

  }
  ellipse () {
    if (this.rendererType === 'svg') {
      new EllipseSvg(this.dom, this.svgDom, this.options)
    }
  }
  polySide () {
    if (this.rendererType === 'svg') {
      new PolyType(this.dom, this.svgDom, this.options)
    }
  }
  bezierCurve () {
    new BezierCurve(this.ctx, this.options)
  }

  star () {
    new Star(this.ctx, this.options)
  }

  rose () {
    new Rose(this.ctx, this.options)
  }

  sector () {
    new Sector(this.ctx, this.options)
  }
  heart () {
    new Heart(this.ctx, this.options)
  }

  dispose () {
    delInstance(this.id)
  }
}

const instances = {}
function delInstance (id) {
  delete instances[id]
}

export function init (dom, opts) {
  const instance = new TerryCharts(dom, opts)
  instances[instance.id] = instance
  return instance
}