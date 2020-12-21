import { createRectSvg } from './RectSvg';

export default {
  title: 'Terry Charts/Chart/RectSvg',

};

const Template = (args) => {
  return createRectSvg(args);
};
export const RectSvg = Template.bind({});
RectSvg.args = {
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