import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createRose = () => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'rose')
  let options = {
    shape: {
      cx: 40,
      cy: 40,
      r: [3, 6, 9, 12, 15, 18, 21],
      k: 1,
      n: 2
    },
    style: {
      stroke: '#f50',
      fill: 'transparent',
      shadow: 'green',
      shadowBlur: 5,
      shadowX: 3,
      shadowY: 1
    },
    text: {
      font: '20px 微软雅黑',
      txt: '北京',
      x: 130,
      y: 120,
      mw: 100
    },
    animate: {
      show: true,
      scale: {
        x: 5,
        y: 5
      },
      translate: {
        x: 10,
        y: 10
      }
    }
  }
  TerryCharts.init(dom, options).rose()
  return dom
};