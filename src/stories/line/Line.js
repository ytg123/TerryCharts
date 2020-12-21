import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createLine = () => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'line')
  let options = {
    width: 500,
    height: 500,
    shape: {
      // x1: 10,
      // y1: 10,
      // x2: 70,
      // y2: 70,
      cap: 'circle',
      width: 3
    },
    style: {
      stroke: '#f50',
      fill: 'transparent'
    },
    data: [
      {
        x: 0,
        y: 10
      },
      {
        x: 120,
        y: 20
      },
      {
        x: 30,
        y: 30
      }, {
        x: 60,
        y: 100
      }, {
        x: 90,
        y: 120
      }
    ],
    animate: {
      show: true,
      rotate: 10,
      scale: {
        x: 2,
        y: 2
      },
      translate: {
        x: 30, y: 100
      }
    }
  }
  TerryCharts.init(dom, options).line()
  return dom
};
