import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createRose = (options) => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'rose')
  TerryCharts.init(dom, options).rose()
  return dom
};