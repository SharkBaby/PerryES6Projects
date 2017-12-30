var HtmlWebpackPlugin = require('html-webpack-plugin');
var path = require('path');

module.exports = {
  entry: ["babel-polyfill", "./src/index.js"],
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index.bundle.js'
  },
  module: {
    rules: [
      { test: /\.js$/,
        exclude: /node_modules/, 
        loader: "babel-loader",
        query:{
          presets:[['es2015',{"loose":true}]]
        }
      }
    ]
  },
  plugins: [new HtmlWebpackPlugin()]
}