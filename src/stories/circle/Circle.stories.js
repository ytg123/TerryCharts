import { createCircle } from './Circle'

export default {
  title: 'Terry Charts/Chart/Circle'
}

const Template = (args) => {
  return createCircle(args);
};
export const Circle = Template.bind({});

Circle.args = {
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