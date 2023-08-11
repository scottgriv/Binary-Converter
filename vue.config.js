module.exports = {
  publicPath: process.env.NODE_ENV === "production" ? "/vue-binary_converter/" : "/",
  css: {
    loaderOptions: {
      less: {
        lessOptions: {
          javascriptEnabled: true,
        },
      },
    },
  },
};