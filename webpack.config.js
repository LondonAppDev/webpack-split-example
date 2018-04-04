const path = require('path');
const webpack = require('webpack');


module.exports = {
  entry: {
    'core': './src/core/index.js',
    'my-app': './src/my-app/index.js'
  },
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      jquery: 'jquery/src/jquery',
    }
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: "jquery",
      jQuery: "jquery"
    }),
  ],
  mode: 'development',
}
