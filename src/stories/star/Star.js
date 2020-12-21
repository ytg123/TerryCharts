import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createStar = () => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'star')
  let options = {
    shape: {
      cx: 180,
      cy: 40,
      n: 5,
      r: 40,
      r0: 15
    },
    style: {
      stroke: '#f50',
      fill: 'pink'
    },
    animate: {
      show: true,
      rotate: 20
    }
  }
  TerryCharts.init(dom, options).star()
  return dom
};