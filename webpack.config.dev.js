const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: {
    bundle: './src/js/main.js',
    style: './src/css/index.js',
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
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader',
      },
      {
        test: /\.scss$/,
        loader: 'style-loader!css-loader!sass-loader',
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify(process.env.NODE_ENV),
      },
    }),
    new webpack.NoErrorsPlugin(),
  ],
  devServer: {
    contentBase: 'public/dist',
  },
};
