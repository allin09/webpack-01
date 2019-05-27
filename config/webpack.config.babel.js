import { resolve } from 'path'
import { realpathSync } from 'fs'
import { HotModuleReplacementPlugin } from 'webpack'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import WebpackPwaManifest from 'webpack-pwa-manifest'
import manifestConfig from '../public/manifest.json'
const appDir = realpathSync(process.cwd())
const getPath = path => resolve(appDir, path)
// console.log(`当前工作目录是: ${process.cwd()}`)
// console.log(appDir)
// console.log(1, resolve(__dirname, 'dist'))
// console.log(2, require.resolve('webpack'))

function getArg(arg) {
  const type = Object.prototype.toString.call(arg)
  if (type === '[object Function]') return arg.toString()
  else if (
    ['[object Object]', '[object process]', '[object global]'].includes(type)
  )
    return Object.keys(arg)
  console.log(Object.prototype.toString.call(arg))
  return arg
}
module.exports = () => {
  console.error(Object.values(arguments).length)
  Object.values(arguments).map((arg, k) => {
    console.log('webpack config:', k, getArg(arg))
  })

  return {
    mode: 'development',
    devtool: 'inline-source-map',
    entry: getPath('./src/index'),
    output: {
      publicPath: '/',
      filename: 'js/[name].[hash].js',
      path: getPath('dist')
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          include: getPath('./src'),
          exclude: /node_modules/
        },
        {
          test: /\.png$/,
          include: /src\/assets\/img/,
          use: [
            {
              loader: 'url-loader',
              options: {
                limit: 10000,
                name: 'img/[name].[contenthash].[ext]'
              }
            }
          ]
        },
        {
          test: /(favicon|logo|manifest)\.(ico|png|json)$/,
          use: [
            {
              loader: 'file-loader',
              options: {
                // name: '[name].[ext]?[hash:7]'
                name: '[name].[ext]'
              }
            }
          ]
        }
        // {
        //   test: /\.(html|ejs)$/,
        //   use: [
        //     'html-loader',
        //     {
        //       loader: 'ejs-html-loader',
        //       options: {
        //         minimize: true,
        //         removeComments: false,
        //         collapseWhitespace: false
        //       }
        //     }
        //   ]
        // },
        // {
        //   loader: 'file-loader',
        //   exclude: /\.(js|mjs|jsx|ts|tsx|html|json)$/,
        //   options: {
        //     name: 'static/media/[name].[hash:8].[ext]'
        //   }
        // }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        title: 'webpack-01',
        template: getPath('./public/index.html'),
        showErrors: true,
        PUBLIC_URL: '/',
        favicon: getPath('./public/favicon.ico'),
        minify: {
          removeComments: true //删除注释
          //collapseWhitespace: true //删除空格
        }
      }),
      new WebpackPwaManifest(manifestConfig),
      new HotModuleReplacementPlugin()
    ],
    resolve: {
      extensions: ['.ts', '.tsx', '.js', '.css', '.json'],
      alias: {
        '~': getPath('./src'),
        img: getPath('./src/assets/img')
      }
    },
    devServer: {
      host: '0.0.0.0',
      port: process.env.docker_port || '9999',
      contentBase: getPath('./dist'),
      historyApiFallback: true, //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
      hot: true
    }
  }
}
