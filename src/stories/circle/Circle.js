import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createCircle = () => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'circle')
  let options = {
    shape: {
      x: 50,
      y: 50,
      r: 30,
      startAngle: 0,
      endAngle: 2 * Math.PI
    },
    style: {
      stroke: '#f50',
      fill: 'pink'
    }
  }
  TerryCharts.init(dom, options).circle()
  return dom
};