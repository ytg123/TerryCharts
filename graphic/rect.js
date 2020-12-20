export default class Rect {
  constructor(ctx, opts) {
    this.options = opts || {}

    ctx.rect(
      this.options.shape.x,
      this.options.shape.y,
      this.options.shape.width,
      this.options.shape.height
    )


    ctx.fillStyle = this.options.style ? this.options.style.fill : ''
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : ''

    this.options.style && ctx.fill()
    ctx.stroke()
  }
}