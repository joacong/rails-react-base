var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: { path: path.resolve(__dirname, '../vendor/assets/javascripts'), filename: 'frontapp.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
        }
      }
    ]
  },
  resolve: {
    extensions: [".js", ".json", ".jsx"]
  },
};