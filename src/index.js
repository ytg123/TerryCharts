
import {
  Line,
  Rect,
  Circle,
  BezierCurve,
  Star,
  Rose,
  Sector,
  Heart
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
    let rendererType = opts.rednerer || 'canvas';

    if (rendererType === 'canvas') {
      const canvas = document.createElement('canvas')
      canvas.width = opts.width || 400
      canvas.height = opts.height || 400
      canvas.style.borderLeft = '1px solid #666'
      canvas.style.borderBottom = '1px solid #666'
      canvas.style.backgroundColor = 'gray'
      this.ctx = canvas.getContext('2d')
      this.ctx.save();
      this.ctx.translate(0, this.options.height || 400);
      this.ctx.rotate(this._getRad(180));
      this.ctx.scale(-1, 1);
      this.dom.appendChild(canvas)
    }
    if (rendererType === 'svg') {
      const svgDom = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
      const svg = document.createElementNS('http://www.w3.org/2000/svg', this.options.name)
      svgDom.setAttribute('width', this.options.width || 200)
      svgDom.setAttribute('height', this.options.height || 200)
      svg.setAttribute('width', this.options.width || 200)
      svg.setAttribute('height', this.options.height || 200)
      svg.setAttribute('style', this.options.style)
      svg.setAttribute('x', this.options.x)
      svg.setAttribute('y', this.options.y)
      svg.setAttribute('rx', this.options.rx)
      svg.setAttribute('ry', this.options.ry)
      svgDom.appendChild(svg)
      this.dom.appendChild(svgDom)

    }

  }
  _getRad (degree) {
    return degree / 180 * Math.PI;
  }
  line () {
    new Line(this.ctx, this.options)
  }

  rect () {
    new Rect(this.ctx, this.options)
  }

  circle () {
    new Circle(this.ctx, this.options)
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