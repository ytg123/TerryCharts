import { createStar } from './Star';

export default {
  title: 'Terry Charts/Chart/Star'
};

const Template = (args) => {
  return createStar(args);
};
export const Star = Template.bind({});

Star.args = {
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
  text: {
    font: '20px 微软雅黑',
    txt: '北京',
    x: 130,
    y: 120,
    mw: 100
  },
  animate: {
    show: true,
    rotate: 20,
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