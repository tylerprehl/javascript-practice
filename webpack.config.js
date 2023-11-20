const path = require('path');

module.exports = {
  mode: 'development',
  entry: './js-files/test-driven-development-main.js',
  output: {
    filename: 'test-driven-bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          // Adds CSS to the DOM by injecting a `<style>` tag
          'style-loader',
          // Interprets `@import` and `url()` like `import/require()` and will resolve them
          'css-loader',
        ],
        exclude: /\.node_modules\//
      },
    ],
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/'),
    },
  },
  watchOptions: {
    ignored: /node_modules/
  }
};
