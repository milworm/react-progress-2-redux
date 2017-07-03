const path = require('path')

module.exports = {
  entry: path.join(__dirname, 'js/app.jsx'),
  output: {
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.(js|jsx)$/,
      exclude: /(node_modules|bower_components)/,
      use: 'babel-loader'
    }, {
      test: /\.scss$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }, {
        loader: 'sass-loader' // compiles Sass to CSS
      }]
    }, {
      test: /\.css$/,
      use: [{
        loader: 'style-loader' // creates style nodes from JS strings
      }, {
        loader: 'css-loader' // translates CSS into CommonJS
      }]
    }]
  },
  resolve: {
    alias: {
      'app': path.join(__dirname, 'js'),
      'progress-dev': path.join(__dirname, '..', 'src')
    },
    extensions: ['.js', '.jsx', '.css', '.scss']
  }
}