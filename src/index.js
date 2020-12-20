// import { v4 as uuidv4 } from 'uuid';
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
class TerryCharts {
  constructor(dom, opts = {}) {

    if (typeof dom === 'string') {
      dom = document.querySelectorAll(dom)
    }
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
}

export function init (dom, opts) {
  const instance = new TerryCharts(dom, opts)
  return instance
}