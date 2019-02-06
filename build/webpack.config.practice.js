const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: '"development"'
    }
  }),
  new VueLoaderPlugin(),
  new HTMLPlugin({
    template: path.join(__dirname, 'template.html')
  }),
]

// 定义运行时的服务器
const devServer =  {
  port: 8001,
  host: '0.0.0.0',
  overlay: {
      errors: true
  },
  //open: true,
  hot: true
}

const config = merge(baseConfig, {
  entry: path.join(__dirname, '../practice/index.js'),
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
          'vue-style-loader',
          'css-loader',
          {
              loader: 'postcss-loader',
              options: {
                  sourceMap: true,
              }
          },
          'stylus-loader'
        ]
      }
    ]
  },
   devServer,
   // import Vue from 'vue'
   resolve: {
     alias: {
       'vue': path.join(__dirname, '../node_modules/vue/dist/vue.js'),
     }
   },
   plugins: defaultPlugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin()
   ]),
   mode: 'development'
})

module.exports = config
