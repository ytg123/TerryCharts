const sin = Math.sin
const cos = Math.cos
const radian = Math.PI / 180


export default class Rose {
  constructor(ctx, opts) {
    this.options = opts || {}
    const shape = this.options.shape

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

    ctx.fillStyle = this.options.style ? this.options.style.fill : ''
    ctx.strokeStyle = this.options.style.stroke ? this.options.style.stroke : ''

    this.options.style && ctx.fill()
    ctx.stroke()
  }
}