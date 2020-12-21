import { createHeart } from './Heart';

export default {
  title: 'Terry Charts/Chart/Heart'
};

const Template = (args) => {
  return createHeart(args);
};
export const Heart = Template.bind({});

Heart.args = {
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
    show: true,
    rotate: 0,
    scale: {
      x: 1,
      y: 1
    },
    translate: {
      x: 30,
      y: 30
    }
  }
}