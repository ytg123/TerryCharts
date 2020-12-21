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
    joinType: 'round', //bevel round miter
    width: 1
  },
  style: {
    stroke: '#f50',
    fill: 'transparent'
  },
  xAxis: [0, 10, 20, 50, 80],
  data: [0, 10, 60, 30, 80],
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
