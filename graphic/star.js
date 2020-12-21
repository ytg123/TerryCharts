
const PI = Math.PI
const cos = Math.cos
const sin = Math.sin

export default class Star {
  constructor(ctx, opts) {
    this.options = opts || {}

    const n = this.options.shape.n
    if (!n || n < 2) return

    const x = this.options.shape.cx
    const y = this.options.shape.cy
    const r = this.options.shape.r
    let r0 = this.options.shape.r0

    if (r0 == null) {
      r0 = n > 4 ? r * cos(2 * PI / n) / cos(PI / n) : r / 3
    }

    const dStep = PI / n
    let deg = -PI / 2
    const xStart = x + r * cos(deg)
    const yStart = y + r * sin(deg)

    deg += dStep

    if (this.options.animate && this.options.animate.show) {
      this.options.animate.scale && ctx.scale(this.options.animate.scale.x || 1, this.options.animate.scale.y || 1)
      this.options.animate.translate && ctx.translate(this.options.animate.translate.x || 0, this.options.animate.translate.y || 0)
      this.options.animate.rotate && ctx.rotate(this.options.animate.rotate * Math.PI / 180)
    }

    ctx.moveTo(xStart, yStart)

    for (let i = 0, end = n * 2 - 1, ri; i < end; i++) {
      ri = i % 2 === 0 ? r0 : r;
      ctx.lineTo(x + ri * cos(deg), y + ri * sin(deg));
      deg += dStep;
    }

    ctx.closePath()


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
  }
}