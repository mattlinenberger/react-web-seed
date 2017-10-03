const path = require('path');

module.exports = {
  test: /\.handlebars$/,
  loader: 'handlebars-loader',
  query: {
    partialDirs: [
      path.join(__dirname, '..', 'src', 'html', 'templates', 'partials'),
    ],
    /* for more helpers info https://github.com/pcardune/handlebars-loader/blob/master/examples/helperDirs/book-listing.handlebars */
    helperDirs: [
      path.join(__dirname, '..', 'src', 'js', 'helpers'),
    ],
  },
};
