var webpack = require('webpack');
var webpackMerge = require('webpack-merge');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var commonConfig = require('./webpack.common');
var helpers = require('./helpers');

module.exports = webpackMerge.smart(commonConfig, {
  output: {
    publicPath: '/',
    filename: '[name].js'
  },

  module: {
    loaders: [
      {
        test: /\.(js|jsx)$/,
        include: helpers.root('client', 'js'),
        loaders: [
          'react-hot',
          'babel-loader'
        ]
      }
    ]
  },

  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
      filename: 'vendor.js',
      chunks: ['vendor']
    }),
    new ExtractTextPlugin('app.css')
  ],

  devServer: {
    contentBase: helpers.root('client'),
    hot: true,
    // proxy: {
    //   '/api/*': 'http://localhost:5000',
    //   '/images/*': 'http://localhost:5000',
    //   '/realtime/*': 'http://localhost:5000',
    //   '/signalr/*': 'http://localhost:5000'
    // }
  }
});
