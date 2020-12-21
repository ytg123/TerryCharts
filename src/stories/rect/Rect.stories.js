import { createRect } from './Rect';

export default {
  title: 'Terry Charts/Chart/Rect',

};

const Template = (args) => {
  return createRect(args);
};
export const Rect = Template.bind({});


Rect.args = {
  width: 500,
  height: 500,
  shape: {
    x: 20,
    y: 20,
    width: 100,
    height: 100
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
