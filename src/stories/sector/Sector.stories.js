import { createSector } from './Sector'

export default {
  title: 'Terry Charts/Chart/Sector'
}

const Template = (args) => {
  return createSector(args);
};
export const Sector = Template.bind({});

Sector.args = {
  shape: {
    cx: 50,
    cy: 50,
    startAngle: 0,
    endAngle: Math.PI / 4,
    clockwise: true,
    r: 80,
    r0: 65,
    cornerRadius: 0,
    innerCornerRadius: 0
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