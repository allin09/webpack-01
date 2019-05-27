import args from 'yargs'
const { argv } = args
  .option('n', {
    alias: 'name',
    demand: true, // required
    default: 'damon',
    describe: 'your name',
    type: 'string'
  })
  .usage('Usage:  hello [options]')
  .example('hello -n damon', 'say hello world')
  .help('h')
  .alias('h', 'help')
  .epilog('copyright 2020')

console.log('process.argv: ', process.argv)
console.log('yargs: ', argv)
