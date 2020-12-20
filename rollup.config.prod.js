const path = require('path')

const resolve = require('rollup-plugin-node-resolve')  //可以将自己的项目和第三方项目组合到一起打包
const commonjs = require('rollup-plugin-commonjs')
const babel = require('rollup-plugin-babel')
const json = require('rollup-plugin-json')
const { terser } = require('rollup-plugin-terser')

const inputPath = path.resolve(__dirname, './src/index.js')

const outumdPath = path.resolve(__dirname, './dist/terry.charts.umd.js')
const outesPath = path.resolve(__dirname, './dist/terry.charts.es.js')

export default {
  input: inputPath,
  output: [
    {
      file: outumdPath,
      format: 'umd', //cjs  es
      name: 'TerryCharts',
      globals: {
        vue: 'vue'
      }
    },
    {
      file: outesPath,
      format: 'es', //cjs  es
      name: 'TerryCharts'
    }
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel({
      exclude: 'node_modules/**',
      runtimeHelpers: true,
      plugins: [
        [
          '@babel/transform-runtime',
          {
            regenerator: true
          }
        ]
      ]
    }),
    json(),
    terser()
  ],
  external: [] //作为外部变量进行引用
}