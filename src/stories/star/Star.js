import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createStar = (options) => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'star')
  TerryCharts.init(dom, options).star()
  return dom
};