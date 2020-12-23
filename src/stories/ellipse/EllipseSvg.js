import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createEllipseSvg = (options) => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'ellipse')
  TerryCharts.init(dom, options).ellipse()
  return dom
};