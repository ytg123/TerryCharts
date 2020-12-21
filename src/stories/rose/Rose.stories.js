import { createRose } from './Rose';

export default {
  title: 'Terry Charts/Chart/Rose'
};

const Template = (args) => {
  return createRose(args);
};
export const Rose = Template.bind({});

Rose.args = {
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
    x: 60,
    y: 20,
    mw: 100
  },
  animate: {
    show: true,
    rotate: 20,
    scale: {
      x: 2,
      y: 2
    },
    translate: {
      x: 10,
      y: 10
    }
  }
}