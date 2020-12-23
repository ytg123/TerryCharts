import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createPoly = (options) => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'poly')
  TerryCharts.init(dom, options).polySide()
  return dom
};