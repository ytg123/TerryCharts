
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
      this.ctx = canvas.getContext('2d')
      this.dom.appendChild(canvas)
    }

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
  console.log(instance.id)
  instances[instance.id] = instance
  return instance
}