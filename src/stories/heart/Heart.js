import * as TerryCharts from '../../../dist/terry.charts.umd.js'
export const createHeart = () => {
  let dom = document.createElement('div')
  dom.setAttribute('id', 'heart')
  let options = {
    shape: {
      cx: 150,
      cy: 150,
      width: 100,
      height: 130
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
      show: false,
      scale: {
        x: 5,
        y: 5
      },
      translate: {
        x: 300,
        y: 300
      }
    }
  }
  TerryCharts.init(dom, options).heart()
  return dom
};
