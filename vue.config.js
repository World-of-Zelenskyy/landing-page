const webpack = require('webpack');

const { defineConfig } = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,
  configureWebpack: {
    plugins: [
      // Work around for Buffer is undefined:
      // https://github.com/webpack/changelog-v5/issues/10
      new webpack.ProvidePlugin({
        Buffer: ["buffer", "Buffer"],
      }),
      new webpack.ProvidePlugin({
        process: "process/browser",
      }),
    ],
    resolve: {
      fallback: {
        url: require.resolve("url/"),
        os: require.resolve("os-browserify/browser"),
        assert: require.resolve("assert/"),
        buffer: require.resolve("buffer/"),
        https: require.resolve("https-browserify"),
        http: require.resolve("stream-http"),
        crypto: require.resolve("crypto-browserify"),
        stream: require.resolve("stream-browserify"),
      },
    },
  },
});
