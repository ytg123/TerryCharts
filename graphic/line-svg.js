export default class LineSvg {
  constructor(dom, svgDom, opts) {
    this.options = opts || {}
    // const svg = document.createElementNS('http://www.w3.org/2000/svg', this.options.name)
    // svg.setAttribute('x1', this.options.x1)
    // svg.setAttribute('y1', this.options.y1)
    // svg.setAttribute('x2', this.options.x2)
    // svg.setAttribute('y2', this.options.y2)
    // svg.setAttribute('style', this.options.style)
    let svg = `
      <${this.options.name} 
        x1 = '${this.options.x1}' 
        y1 = '${this.options.y1}'
        x2 = '${this.options.x2}' 
        y2 = '${this.options.y2}'
        style = '${this.options.style}'
      ></${this.options.name}>
    `
    svgDom.innerHTML = svg
    dom.appendChild(svgDom)
  }
}