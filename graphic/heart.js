export default class Heart {
  constructor(ctx, opts) {
    this.options = opts || {}

    const shape = this.options.shape

    const x = shape.cx
    const y = shape.cy
    const a = shape.width
    const b = shape.height

    ctx.moveTo(x, y)

    ctx.bezierCurveTo(
      x + a / 2, y - b * 2 / 3,
      x + a * 2, y + b / 3,
      x, y + b
    )

    ctx.bezierCurveTo(
      x - a * 2, y + b / 3,
      x - a / 2, y - b * 2 / 3,
      x, y
    )

    ctx.fillStyle = this.options.style ? this.options.style.fill : ''
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : ''

    this.options.style && ctx.fill()
    ctx.stroke()
  }
}