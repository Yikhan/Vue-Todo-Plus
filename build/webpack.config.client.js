const path = require('path')
const webpack = require('webpack')
const merge = require('webpack-merge')
const MiniExtractPlugin = require('mini-css-extract-plugin')
const baseConfig = require('./webpack.config.base')
const VueLoaderPlugin = require('vue-loader/lib/plugin')
const HTMLPlugin = require('html-webpack-plugin')

// detect the env mode
const isDev = process.env.NODE_ENV === 'development'

const defaultPlugins = [
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: isDev ? '"development"' : '"production"'
    }
  }),
  new VueLoaderPlugin(),
  new HTMLPlugin(),
]


// 定义运行时的服务器
const devServer =  {
  port: 8000,
  host: '0.0.0.0',
  overlay: {
      errors: true
  },
  //open: true,
  hot: true
}

let config

if (isDev) {
    config = merge(baseConfig, {
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
       plugins: defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin()
       ]),
       mode: 'development'
    })

} else {
    config = merge(baseConfig, {
      entry: {
        app: path.join(__dirname, '../src/index.js'),
        vendor: ['vue']
      },
      output: {
        filename: '[name].[hash:8].js',
      },
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
      plugins: defaultPlugins.concat([
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoEmitOnErrorsPlugin(),
        new MiniExtractPlugin({filename: 'styles.[contentHash:8].css'}),
       ]),
      mode: 'production',
      optimization: {
        splitChunks: {
          chunks: 'async',
          minSize: 30000,
          maxSize: 0,
          minChunks: 1,
          maxAsyncRequests: 5,
          maxInitialRequests: 3,
          automaticNameDelimiter: '~',
          name: true,
          cacheGroups: {
            vendors: {
              test: /[\\/]node_modules[\\/]/,
              priority: -10
            },
            default: {
              minChunks: 2,
              priority: -20,
              reuseExistingChunk: true
            }
          }
      }
      }
    })
  }

module.exports = config