import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createCircle = (options) => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'circle')
  TerryCharts.init(dom, options).circle()
  return dom
};