module.exports = {
  test: /\.(jpg|jpeg|gif|svg|png)$/,
  use: [
    {
      loader: 'file-loader',
      options: {
        name: './assets/images/[name].[ext]',
      },
    },
  ],
};
