module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/Binary-Converter/" : "/",
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
  pages: {
    index: {
      entry: 'src/main.js',
      template: 'public/index.html',
      filename: 'index.html',
      title: 'Binary Converter',
    },
  },
};
