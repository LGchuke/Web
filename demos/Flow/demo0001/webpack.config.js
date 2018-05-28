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
        path.resolve(__dirname, 'src/index.jsx'),
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
          test: /\.jsx$/,
          exclude: /node_modules/,
          loaders: ['babel-loader', 'eslint-loader'],
          include: [path.join(__dirname, publicPath + 'src')]
        },
        {
          test: /\.css$/,
          loaders: ['style-loader', 'css-loader'],
        }
      ]
    },

    plugins: [
      new HtmlWebpackPlugin({
        template: path.resolve(__dirname, './public/index.html')
      }),
      new webpack.DefinePlugin({
        'process.env': {
          'NODE_ENV': '"production"'
        }
      })
    ],

    devServer: {
      contentBase: './dist',
      port: 2009,
      publicPath,
      inline: true,
      hotOnly: true
    }
  },
];
