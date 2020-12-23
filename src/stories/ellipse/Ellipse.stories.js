import { createEllipseSvg } from './EllipseSvg.js'

export default {
  title: 'Terry Charts/Chart/Ellipse'
}

const Template = (args) => {
  return createEllipseSvg(args);
};
export const Ellipsesvg = Template.bind({});

Ellipsesvg.args = {
  name: 'ellipse',
  rednerer: 'svg',
  cx: 60,
  cy: 80,
  rx: 50,
  ry: 70,
  style: 'fill:yellow;stroke:;purple;stroke-width:2;'
}