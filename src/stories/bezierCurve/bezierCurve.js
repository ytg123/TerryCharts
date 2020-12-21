import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createBezierCurve = (options) => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'bezierCurve')
  TerryCharts.init(dom, options).bezierCurve()
  return dom
};