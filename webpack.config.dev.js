const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/js/main.js',
  },
  output: {
    path: path.join(__dirname, 'public/dist'),
    filename: '[name].js',
    publicPath: 'http://localhost:8080/',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  devServer: {
    contentBase: 'public/dist',
  },
};
