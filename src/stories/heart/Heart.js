import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createHeart = (options) => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'heart')
  TerryCharts.init(dom, options).heart()
  return dom
};
