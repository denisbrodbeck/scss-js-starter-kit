import path from 'path'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import pkg from '../package.json'

const year = new Date().getFullYear()
const external = [
  // 'jquery'
]
const plugins = [
  resolve(), // so Rollup can find `ms`
  commonjs() // so Rollup can convert `ms` to an ES module
]
const globals = {
  // jquery: 'jQuery',
}

const banner = `/*!
 * App v${pkg.version} (${pkg.homepage})
 * Copyright ${year} ${pkg.author}
 * Licensed under MIT (https://github.com/denisbrodbeck/scss-js-starter-kit/LICENSE)
 */`

export default [
  {
    input: path.resolve(__dirname, '../js/index.js'),
    output: {
      file: path.resolve(__dirname, `../dist/js/app.js`),
      format: 'umd' // browser-friendly UMD build
      // format: 'iife' // browser-only build -- results in smaller size
    },
    name: 'app',
    external,
    globals,
    plugins,
    banner
  }
]
