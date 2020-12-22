export default class LineSvg {
  constructor(dom, svgDom, opts) {
    this.options = opts || {}
    const svg = document.createElementNS('http://www.w3.org/2000/svg', this.options.name)
    svg.setAttribute('x1', this.options.x1)
    svg.setAttribute('y1', this.options.y1)
    svg.setAttribute('x2', this.options.x2)
    svg.setAttribute('y2', this.options.y2)
    svg.setAttribute('style', this.options.style)
    svgDom.appendChild(svg)
    dom.appendChild(svgDom)
  }
}