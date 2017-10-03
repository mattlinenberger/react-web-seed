/* javascript webpack loader */

module.exports = {
  test: /\.js$/,
  exclude: /(node_modules|bower_components)/,
  use: [
    {
      loader: 'babel-loader',
      options: {
        presets: ['env'],
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
