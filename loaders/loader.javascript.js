/* javascript webpack loader */

module.exports = {
  test: /\.(js|jsx)$/,
  exclude: /(node_modules|bower_components)/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['es2015', 'react'],
      },
    },
    {
      loader: 'eslint-loader',
      options: {
        enforce: 'pre',
      },
    },
  ],
};
