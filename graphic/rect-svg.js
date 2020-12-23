export default class ReacSvg {
  constructor(dom, svgDom, opts) {
    this.options = opts || {}
    // const svg = document.createElementNS('http://www.w3.org/2000/svg', this.options.name)
    // svg.setAttribute('width', this.options.width || 200)
    // svg.setAttribute('height', this.options.height || 200)
    // svg.setAttribute('style', this.options.style)
    // svg.setAttribute('x', this.options.x)
    // svg.setAttribute('y', this.options.y)
    // svg.setAttribute('rx', this.options.rx)
    // svg.setAttribute('ry', this.options.ry)
    let svg = `
    <${this.options.name} 
      width = '${this.options.width}'
      height = '${this.options.height}'
      x = '${this.options.x}' 
      y = '${this.options.y}'
      rx = '${this.options.rx}' 
      ry = '${this.options.ry}'
      style = '${this.options.style}'
    ></${this.options.name}>
    
    `
    svgDom.innerHTML = svg
    dom.appendChild(svgDom)
  }
}