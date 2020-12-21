import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createSector = (options) => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'sector')
  TerryCharts.init(dom, options).sector()
  return dom
};