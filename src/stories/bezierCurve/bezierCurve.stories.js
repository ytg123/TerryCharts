import { createBezierCurve } from './bezierCurve'

export default {
  title: 'Terry Charts/Chart/BezierCurve'
}

const Templage = () => {
  return createBezierCurve();
}

export const BezierCurve = Templage.bind({})