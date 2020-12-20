// import { v4 as uuidv4 } from 'uuid';
import Line from '../graphic/line.js'
import Rect from '../graphic/rect.js'
import Circle from '../graphic/circle.js'
import BezierCurve from '../graphic/bezierCurve.js'
class TerryCharts {
  constructor(dom, opts = {}) {
    this.dom = dom;
    // this.id = uuidv4();
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
}

export function init (dom, opts) {
  const instance = new TerryCharts(dom, opts)
  return instance
}