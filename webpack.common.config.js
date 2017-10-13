const webpack = require('webpack');
const path = require('path');

/* files */
const pkg = require('./package.json');
const appData = require('./app.data');

/* loaders */
const loaderJavascript = require('./loaders/loader.javascript.js');
const loaderHandlebars = require('./loaders/loader.handlebars.js');
const loaderSass = require('./loaders/loader.sass.js');
const loaderImages = require('./loaders/loader.images.js');

/* plugins */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const common = {
  entry: {
    app: './src/js/index.jsx',
  },
  output: {
    filename: `[name].${pkg.version}.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      react: 'preact-compat',
      'react-dom': 'preact-compat',
    },
  },
  module: {
    loaders: [
      loaderJavascript,
      loaderHandlebars,
      loaderSass,
      loaderImages,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/html/index.handlebars',
      data: appData,
    }),
    new webpack.optimize.CommonsChunkPlugin({
      name: 'common',
    }),
  ],
};

module.exports = common;
