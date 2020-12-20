export default class Circle {
  constructor(ctx, opts) {
    this.options = opts || {}

    ctx.arc(
      this.options.shape.x,
      this.options.shape.y,
      this.options.shape.r,
      this.options.shape.startAngle,
      this.options.shape.endAngle,
      this.options.shape.clockwise
    )

    ctx.fillStyle = this.options.style ? this.options.style.fill : ''
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : ''

    this.options.style && ctx.fill()
    ctx.stroke()
  }
}