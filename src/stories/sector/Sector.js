import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createSector = () => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'sector')
  let options = {
    shape: {
      cx: 50,
      cy: 50,
      startAngle: 0,
      endAngle: Math.PI / 4,
      clockwise: true,
      r: 80,
      r0: 65,
      cornerRadius: 0,
      innerCornerRadius: 0
    },
    style: {
      stroke: '#f50',
      fill: 'transparent',
      shadow: 'green',
      shadowBlur: 15,
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
        x: 1,
        y: 1
      },
      translate: {
        x: 10,
        y: 10
      }
    }
  }
  TerryCharts.init(dom, options).sector()
  return dom
};