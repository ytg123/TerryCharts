import { createPoly } from './poly.js'
export default {
  title: 'Terry Charts/Chart/polyType'
}

const Template = (args) => {
  return createPoly(args);
};
export const Polysvgline = Template.bind({});

Polysvgline.args = {
  name: 'polyline',
  rednerer: 'svg',
  points: '20,20 40,25 60,40 80,120 120,140 200,180',
  style: 'fill:none;stroke:black;stroke-width:3'
}

export const Polygonsvg = Template.bind({});

Polygonsvg.args = {
  name: 'polygon',
  rednerer: 'svg',
  points: '30,0 300,0 300,10 300,300 0,300 0,180 30,160 30,100 0,80 0,30',
  style: 'fill:orange;stroke:black;stroke-width:1;fill-rule:evenodd;'
}