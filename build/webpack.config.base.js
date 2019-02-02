const path = require('path')

const config = {
    target: 'web',
    entry: path.join(__dirname, '../src/index.js'),
    output: {
        filename: 'bundle.[hash:8].js',
        path: path.join(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.vue$/,
                loader: 'vue-loader'
            },
            {
                test: /\.jsx$/,
                loader: 'babel-loader'
            },
            // 对js文件也要处理 主要是处理ES6语法
            {
              test: /\.js$/,
              loader: 'babel-loader',
              exclude: /node_modules/
            },
            {
                test: /\.(gif|jpg|jpeg|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            limit: 1024,
                            name: 'resources/[path][name].[hash:8].[ext]'
                        }
                    }
                ]
            }
            
        ]
    },
    mode: 'none'
   
}

module.exports = config