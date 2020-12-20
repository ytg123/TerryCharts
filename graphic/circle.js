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

    ctx.font = this.options.text.font
    ctx.fillText(this.options.text.txt, this.options.text.x, this.options.text.y, this.options.text.mw || 140)
    ctx.shadowColor = this.options.style.shadow
    ctx.shadowBlur = this.options.style.shadowBlur
    ctx.shadowOffsetX = this.options.style.shadowX || 0
    ctx.shadowOffsetY = this.options.style.shadowY || 0
    if (this.options.animate.show) {
      ctx.scale(this.options.animate.scale.x || 1, this.options.animate.scale.y || 1)
      ctx.translate(this.options.animate.translate.x || 0, this.options.animate.translate.y || 0)
    }

    ctx.fillStyle = this.options.style ? this.options.style.fill : ''
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : ''

    this.options.style && ctx.fill()
    ctx.stroke()
  }
}