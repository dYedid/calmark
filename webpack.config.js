const path = require('path');
const webpack = require('webpack');

module.exports = {
  mode: process.env.NODE_ENV,
  entry: path.resolve(__dirname, 'client/index.jsx'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  devServer: {
    // contentBase: path.resolve(__dirname, 'dist'),
    publicPath: '/dist/',
    compress: true,
    port: 8080,
    hot: true,
    proxy: {
      '/dbq': 'http://localhost:3000',
      '/test': 'http://localhost:3000',
    },
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: { presets: ['@babel/preset-env', '@babel/preset-react'] },
      },
      { test: /\.txt$/, use: 'raw-loader' },
      {
        test: /\.scss/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
};
