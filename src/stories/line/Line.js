import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createLine = (options) => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'line')
  TerryCharts.init(dom, options).line()
  return dom
};
