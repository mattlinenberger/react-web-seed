/* javascript webpack loader */

module.exports = {
  test: /\.(js|jsx)$/,
  exclude: /(node_modules|bower_components)/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['env', 'react'],
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
