const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const VueServerPlugin = require('vue-server-renderer/server-plugin')

const config = merge(baseConfig, {
  target: 'node',
  entry: path.join(__dirname, '../client/server-entry.js'),
  devtool: '#source-map',
  output: {
    libraryTarget: 'commonjs2',
    filename: 'server-entry.js',
    path: path.join(__dirname, '../server-build')
  },
  externals: Object.keys(require('../package.json').dependencies),
  module: {
    rules: [
      {
        test: /\.styl(us)?$/,
        use: [
            {
                loader: MiniExtractPlugin.loader,
                options: {pulicPath: '../'}
            },
            'css-loader',
            {
                loader: 'postcss-loader',
                options: { sourceMap: true }
            },
            'stylus-loader'
        ]
      }
    ]
  },

   plugins: [
    new VueServerPlugin(),
    new MiniExtractPlugin({filename: 'styles.[contentHash:8].css'}),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
      'process.env.VUE_ENV': '"server"'
    })
   ]
})

module.exports = config
