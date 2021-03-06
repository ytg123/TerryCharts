const sin = Math.sin
const cos = Math.cos
const radian = Math.PI / 180


export default class Rose {
  constructor(ctx, opts) {
    this.options = opts || {}
    const shape = this.options.shape

    if (this.options.animate && this.options.animate.show) {
      this.options.animate.scale && ctx.scale(this.options.animate.scale.x || 1, this.options.animate.scale.y || 1)
      this.options.animate.translate && ctx.translate(this.options.animate.translate.x || 0, this.options.animate.translate.y || 0)
      this.options.animate.rotate && ctx.rotate(this.options.animate.rotate * Math.PI / 180)
    }

    const R = shape.r;
    const k = shape.k;
    const n = shape.n;
    const x0 = shape.cx;
    const y0 = shape.cy;
    let x;
    let y;
    let r;

    ctx.moveTo(x0, y0)

    for (let i = 0, len = R.length; i < len; i++) {
      r = R[i];

      for (let j = 0; j <= 360 * n; j++) {
        x = r
          * sin(k / n * j % 360 * radian)
          * cos(j * radian)
          + x0;
        y = r
          * sin(k / n * j % 360 * radian)
          * sin(j * radian)
          + y0;
        ctx.lineTo(x, y);
      }
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
  }
}