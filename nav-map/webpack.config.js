/* global __dirname */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const publicPath = '/';

module.exports = [
  {
    devtool: 'eval',

    entry: {
      index: [
        'react-hot-loader/patch',
        // 'webpack/hot/only-dev-server', // It's removed in latest version ?
        path.resolve(__dirname, 'src/index.js'),
      ]
    },

    output: {
      filename: '[name].bundle.min.js',
      // 好好考虑一下
      path: path.resolve(__dirname, 'dist/'),
      publicPath
    },

    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loaders: ['babel-loader', 'eslint-loader'],
          include: [path.join(__dirname, publicPath + 'src')]
        },
      ]
    },

    // 不着急
    plugins: [
      // new webpack.optimize.UglifyJsPlugin({
      //   compress: {
      //       warnings: false
      //   }
      // })
      new HtmlWebpackPlugin({
        template: __dirname + '/public/index.html'
      }),
      new webpack.HotModuleReplacementPlugin()
    ],

    devServer: {
      contentBase: './dist',
      port: 1188,
      publicPath,
      // historyApiFallback: true,
      inline: true,
      // hot: true,  // 这参数与 --hot 与插件 3 者间关系
      hotOnly: true
    }
  },
];
