var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

var embedFileSize = 65536;
var assetsLoaders = [
  { test: /\.json$/, loader: 'json' },
  { test: /\.mp4$/, loader: 'url?limit=' + embedFileSize + '&mimetype=video/mp4' },
  { test: /\.svg.*$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/svg+xml' },
  { test: /\.png$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/png' },
  { test: /\.jpg$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/jpeg' },
  { test: /\.gif$/, loader: 'url?limit=' + embedFileSize + '&mimetype=image/gif' },
  {
    test: /\.(otf|eot|ttf|woff|woff2)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
    loader: 'url?limit=' + embedFileSize
  }
];

module.exports = {
  entry: {
    app: helpers.root('client', 'js', 'index.js'),
    vendor: [
      'react',
      'react-dom',
      'es6-promise',
      'isomorphic-fetch',
      'humps',
      'spin.js'
    ]
  },
  module: {
    loaders: assetsLoaders.concat([
      {
        test: /\.styl$/,
        loader: ExtractTextPlugin.extract(
          'style-loader',
          'css?sourceMap&modules&importLoaders=1&localIdentName=[name]__[local]___[hash:base64:5]!stylus'
        )
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('css?sourceMap')
      },
      {
        test: /\.(js|jsx)$/,
        include: helpers.root('client', 'js'),
        loaders: [
          'babel-loader'
        ]
      }
    ]),
    preLoaders: [
      {
        test: /\.(js|jsx)$/,
        include: helpers.root('client', 'js'),
        loader: 'eslint-loader'
      }
    ]
  },
  resolve: {
    alias: {
      actions: helpers.root('client', 'js', 'actions'),
      components: helpers.root('client', 'js', 'components'),
      ui: helpers.root('client', 'js', 'components', 'UI'),
      network: helpers.root('client', 'js', 'network'),
      stores: helpers.root('client', 'js', 'stores'),
      utils: helpers.root('client', 'js', 'utils')
    },
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': { NODE_ENV: JSON.stringify(process.env.NODE_ENV || 'development') }
    })
  ]
};
