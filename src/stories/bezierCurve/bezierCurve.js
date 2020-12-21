import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createBezierCurve = () => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'bezierCurve')
  let options = {
    shape: {
      cx1: 5,
      cy1: 60,
      cx2: 65,
      cy2: 60,
      x: 30,
      y: 30
    },
    style: {
      stroke: '#f50',
      fill: 'pink'
    }
  }
  TerryCharts.init(dom, options).bezierCurve()
  return dom
};