

export default class Line {
  constructor(ctx, opts) {
    this.options = opts || {}

    this.x1 = this.options.shape.x1
    this.x2 = this.options.shape.x2
    this.y1 = this.options.shape.y1
    this.y2 = this.options.shape.y2

    ctx.beginPath()
    ctx.moveTo(this.x1, this.y1)
    ctx.lineCap = this.options.shape.cap
    ctx.lineWidth = this.options.shape.width
    ctx.lineTo(this.x2, this.y2)
    ctx.fillStyle = this.options.style ? this.options.style.fill : ''
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : ''

    this.options.style && ctx.fill()
    ctx.stroke()
  }
}