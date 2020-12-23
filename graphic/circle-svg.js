export default class CircleSvg {
  constructor(dom, svgDom, opts) {
    this.options = opts || {}
    let svg = `
      <${this.options.name} 
        cx = '${this.options.cx}' 
        cy = '${this.options.cy}'
        r = '${this.options.r}' 
        stroke = '${this.options.style.stroke}'
        stroke-width = '${this.options.style.strokeWidth}'
        fill = '${this.options.style.fill}'
      ></${this.options.name}>
    `
    svgDom.innerHTML = svg
    dom.appendChild(svgDom)
  }
}