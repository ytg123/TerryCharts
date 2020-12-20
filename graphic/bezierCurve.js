export default class BezierCurve {
  constructor(ctx, opts) {
    this.options = opts || {}

    ctx.bezierCurveTo(
      this.options.shape.cx1,
      this.options.shape.cy1,
      this.options.shape.cx2,
      this.options.shape.cy2,
      this.options.shape.x,
      this.options.shape.y
    )

    ctx.fillStyle = this.options.style ? this.options.style.fill : ''
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : ''

    this.options.style && ctx.fill()
    ctx.stroke()
  }
}