export default class Rect {
  constructor(ctx, opts) {
    this.options = opts || {}

    if (this.options.animate && this.options.animate.show) {
      this.options.animate.scale && ctx.scale(this.options.animate.scale.x || 1, this.options.animate.scale.y || 1)
      this.options.animate.translate && ctx.translate(this.options.animate.translate.x || 0, this.options.animate.translate.y || 0)
      this.options.animate.rotate && ctx.rotate(this.options.animate.rotate * Math.PI / 180)
    }
    if (this.options.data.length > 0) {
      this.options.data.forEach((item, i) => {
        let x = (this.options.xAxis[i] + this.options.shape.barCategoryGap * Math.floor(this.options.shape.barWidth / this.options.data.length) * i)
        ctx.rect(
          x,
          0,
          this.options.shape.barWidth,
          item
        )
        this.options.label.show && ctx.fillText(item, x, item + 10, this.options.shape.barWidth)
        this.options.label.show && (ctx.textAlign = this.options.label.align)
      });
    }


    ctx.font = this.options.text ? this.options.text.font : '14px 微软雅黑 #666'
    this.options.text && ctx.fillText(this.options.text.txt, this.options.text.x, this.options.text.y, this.options.text.mw || 140)
    ctx.shadowColor = this.options.style.shadow || 'transparent'
    ctx.shadowBlur = this.options.style.shadowBlur || 0
    ctx.shadowOffsetX = this.options.style.shadowX || 0
    ctx.shadowOffsetY = this.options.style.shadowY || 0
    ctx.fillStyle = this.options.style ? this.options.style.fill : ''
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : ''

    this.options.style && ctx.fill()
    ctx.stroke()

    ctx.restore()
  }

}