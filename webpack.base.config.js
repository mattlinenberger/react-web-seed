
const path = require('path');

/* files */
const pkg = require('./package.json');

/* loaders */
const loaderJavascript = require('./loaders/loader.javascript.js');
const loaderHandlebars = require('./loaders/loader.handlebars.js');
const loaderSass = require('./loaders/loader.sass.js');

/* plugins */
const HtmlWebpackPlugin = require('html-webpack-plugin');

const appData = {
  title: 'React Web Seed',
};

const webpack = {
  entry: {
    app: './src/js/index.jsx',
  },
  output: {
    filename: `[name].${pkg.version}.js`,
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    loaders: [
      loaderJavascript,
      loaderHandlebars,
      loaderSass,
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'src/html/index.handlebars',
      data: appData,
    }),
  ],
};

module.exports = webpack;
