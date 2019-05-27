#!/usr/bin/env node --experimental-modules
// --experimental-modules 标识  .mjs后缀才能使用es6语法

import args from 'yargs'
const { argv } = args.option('n', {
  alias: 'name',
  demand: true, // required
  default: 'damon',
  describe: '你的名字',
  type: 'string'
})

console.log('process.argv: ', process.argv)
console.log('yargs: ', argv)
