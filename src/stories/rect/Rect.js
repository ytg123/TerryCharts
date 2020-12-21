import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createRect = (options) => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'rect')
  // let options = {
  //   width: 500,
  //   height: 500,
  //   shape: {
  //     x: 20,
  //     y: 20,
  //     width: 100,
  //     height: 100
  //   },
  //   style: {
  //     stroke: '#f50',
  //     fill: 'pink'
  //   }
  // }
  TerryCharts.init(dom, options).rect()
  return dom
};
