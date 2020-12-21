import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createRectSvg = (options) => {
  let dom = document.createElement('div')
  TerryCharts.init(dom, options)
  return dom
};