import { createRect } from './Rect';

export default {
  title: 'Terry Charts/Chart/Rect',

};

const Template = (args) => {
  return createRect(args);
};
export const Rectcanvas = Template.bind({});


Rectcanvas.args = {
  width: 500,
  height: 500,
  backgroundColor: '#f50',
  rednerer: 'canvas',
  border: {
    borderWidth: 10,
    borderColor: '#999',
    borderType: 'dashed',
  },
  shape: {
    // x: 20,
    // y: 20,
    // width: 100,
    // height: 100
    barWidth: 20,
    barCategoryGap: 10
  },
  style: {
    stroke: '#f50',
    fill: 'pink'
  },
  label: {
    show: true,
    align: 'center', // center|end|left|right|start
  },
  xAxis: [20, 50, 60, 80, 90, 120],
  data: [50, 80, 120, 230, 30, 100],
  // text: {
  //   font: '20px 微软雅黑',
  //   txt: '北京',
  //   x: 130,
  //   y: 120,
  //   mw: 100
  // },
  animate: {
    show: true,
    rotate: 0,
    scale: {
      x: 1,
      y: 1
    },
    translate: {
      x: 30, y: 10
    }
  }
}
export const Rectsvg = Template.bind({});
Rectsvg.args = {
  name: 'rect',
  rednerer: 'svg',
  width: 200,
  height: 100,
  x: 0,
  y: 0,
  rx: 40,
  ry: 40,
  style: `fill:rgb(0,0,255);stroke-width:2;stroke:rgb(255,234,10);fill-opacity: 0.4;stroke-opacity: 0.3;opacity: 0.5;`
}