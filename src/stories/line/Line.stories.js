import { createLine } from './Line';

export default {
  title: 'Terry Charts/Chart/Line'
};

const Template = (args) => {
  return createLine(args);
};
export const Line = Template.bind({});

Line.args = {
  width: 500,
  height: 500,
  shape: {
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
