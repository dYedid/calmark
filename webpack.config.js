const path = require('path');

module.exports = {
  mode: 'production',
  entry: path.resolve(__dirname, 'client/index.js'),
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js',
  },
  // devServer: {
  //   contentBase: path.join(__dirname, 'dist'),
  //   compress: true,
  //   port: 9000
  // },
  // module: {
  //   rules: [
  //     { test: /\.txt$/, use: 'raw-loader' }
  //   ]
  // }
}