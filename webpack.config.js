const path = require("path");
const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';

module.exports = {
  devtool: 'source-map',
  entry: {
    // filename: './load.js'
    script: path.resolve(__dirname, "./load.js")
  },
  output: {
    filename: '_build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader'
      }
    ]
  },
  resolve: {
    extensions: [".js"],
    modules: [
        __dirname,
        path.resolve(__dirname, "./node_modules")
    ]
  },
  plugins: [
    // uglify js
    new webpack.optimize.UglifyJsPlugin({
      compress: { warnings: false },
      output: { comments: false },
      sourceMap: true
    }),

    // env plugin
    new webpack.DefinePlugin({
      'proccess.env': { NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
}
