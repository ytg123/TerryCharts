export default class EllipseSvg {
  constructor(dom, svgDom, opts) {
    this.options = opts || {}

    let svg = `
    <${this.options.name} 
      cx = '${this.options.cx}' 
      cy = '${this.options.cy}'
      rx = '${this.options.rx}' 
      ry = '${this.options.ry}'
      style = '${this.options.style}'
    ></${this.options.name}>
    
    `
    svgDom.innerHTML = svg
    dom.appendChild(svgDom)
  }
}