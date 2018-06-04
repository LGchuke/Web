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
        path.resolve(__dirname, './index.js')
      ]
    },

    resolve: {
      extensions: ['.js', '.jsx']
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
          loaders: ['babel-loader'],
          include: [path.join(__dirname, publicPath + './')]
        }
      ]
    },

    plugins: [
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"production"'
        }
      })
    ]
  },
];
