
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

    ctx.moveTo(xStart, yStart)

    for (let i = 0, end = n * 2 - 1, ri; i < end; i++) {
      ri = i % 2 === 0 ? r0 : r;
      ctx.lineTo(x + ri * cos(deg), y + ri * sin(deg));
      deg += dStep;
    }

    ctx.closePath()

    ctx.fillStyle = this.options.style ? this.options.style.fill : ''
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : ''

    this.options.style && ctx.fill()
    ctx.stroke()
  }
}