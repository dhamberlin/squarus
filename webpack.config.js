const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve('dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.scss$/,
      use: [{
        loader: "style-loader" // Creates Style Nodes from JS Strings
      }, {
        loader: "css-loader" // Translates CSS into CommonJS
      }, {
        loader: "sass-loader" // Compiles SCSS to CSS
      }]
    }],
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel',
        exclude: /node_modules/,
        query: {
            presets: ['es2015', 'react']
        }
      },
      {
        test: /\.s?css$/,
        loaders: ['style', 'css', 'sass']
      }
    ]
  }
}