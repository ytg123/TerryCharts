import { createBezierCurve } from './bezierCurve'

export default {
  title: 'Terry Charts/Chart/BezierCurve'
}

const Templage = (args) => {
  return createBezierCurve(args);
}

export const BezierCurve = Templage.bind({})

BezierCurve.args = {
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
    rotate: 10,
    scale: {
      x: 2,
      y: 2
    },
    translate: {
      x: 30, y: 10
    }
  }
}