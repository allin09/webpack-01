module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        debug: false,
        loose: true,
        modules: false,
        useBuiltIns: 'usage',
        corejs: 3,
        targets: {
          node: 'current',
          browsers: ['Android >= 4.0', 'ios >= 7']
          // edge: '17',
          // firefox: '60',
          // chrome: '67',
          // safari: '11.1'
        }
      }
    ],
    '@babel/preset-react'
  ],
  plugins: [
    [
      '@babel/plugin-transform-runtime',
      {
        corejs: false, // 默认值，可以不写
        helpers: true, // 默认，可以不写
        regenerator: false, // 通过 preset-env 已经使用了全局的 regeneratorRuntime, 不再需要 transform-runtime 提供的 不污染全局的 regeneratorRuntime
        useESModules: true // 使用 es modules helpers, 减少 commonJS 语法代码
      }
    ],
    '@babel/plugin-transform-modules-commonjs',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    '@babel/plugin-proposal-class-properties',
    '@babel/plugin-proposal-object-rest-spread'
  ]
}
