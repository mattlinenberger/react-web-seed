const webpack = require('./webpack.base.config.js');

const path = require('path');

/* add source maps to the base config */
webpack.devtool = 'source-map';

/* add dev server config */
webpack.devServer = {
  contentBase: path.join(__dirname, 'dist'),
  compress: true,
  port: 8080,
};

module.exports = webpack;
