/* global __dirname */
const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const publicPath = '/';

console.log('This is: ', __dirname);

module.exports = [
  {
    devtool: 'eval',

    entry: {
      index: [
        'react-hot-loader/patch',
        path.resolve(__dirname, 'src/index.js'),
      ]
    },

    output: {
      filename: '[name].bundle.min.js',
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

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html')
        // template: './index.html'
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"production"'
        }
      })
    ],

    devServer: {
      contentBase: './dist',
      port: 1999,
      publicPath,
      inline: true,
      hotOnly: true
    }
  },
];
