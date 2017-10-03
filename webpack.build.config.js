const webpack = require('./webpack.base.config');

/* plugins */
const uglify = require('./plugins/plugin.uglify.js');

webpack.plugins.push(uglify);

module.exports = webpack;