const path = require('path');

module.exports = {
  mode: 'development',
  entry: './src/test-driven-development-main.js',
  output: {
    filename: 'test-driven-bundle.js',
    path: path.resolve(__dirname, 'dist')
  },
  module: {
    rules: [
      {
        test: /\.(css)$/,
        use: [
          {
            // Adds CSS to the DOM by injecting a `<style>` tag
            loader: 'style-loader'
          },
          {
            // Interprets `@import` and `url()` like `import/require()` and will resolve them
            loader: 'css-loader'
          },
        ]
      }
    ]
  },
  devServer: {
    static: {
      directory: path.join(__dirname, '/')
    }
  }
};