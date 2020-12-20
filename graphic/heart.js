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


    ctx.font = this.options.text ? this.options.text.font : '14px 微软雅黑 #666'
    this.options.text && ctx.fillText(this.options.text.txt, this.options.text.x, this.options.text.y, this.options.text.mw || 140)
    ctx.shadowColor = this.options.style.shadow || 'transparent'
    ctx.shadowBlur = this.options.style.shadowBlur || 0
    ctx.shadowOffsetX = this.options.style.shadowX || 0
    ctx.shadowOffsetY = this.options.style.shadowY || 0
    if (this.options.animate && this.options.animate.show) {
      ctx.scale(this.options.animate.scale.x || 1, this.options.animate.scale.y || 1)
      ctx.translate(this.options.animate.translate.x || 0, this.options.animate.translate.y || 0)
    }

    ctx.fillStyle = this.options.style ? this.options.style.fill : ''
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : ''


    this.options.style && ctx.fill()
    ctx.stroke()

  }
}