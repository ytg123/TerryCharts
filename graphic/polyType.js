export default class PolyType {
  constructor(dom, svgDom, opts) {
    this.options = opts || {}

    let svg = `
    <${this.options.name} 
      points = '${this.options.points}' 
      style = '${this.options.style}'
    ></${this.options.name}>
    
    `
    svgDom.innerHTML = svg
    dom.appendChild(svgDom)
  }
}