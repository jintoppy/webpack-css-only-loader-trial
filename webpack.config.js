const path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module:{
    rules:[
      {
        test: /\.js/,
        exclude: /(node_modules|bower_components)/,
        use: [
          'ignore-loader'
          // {
          //   loader: 'babel-loader',
          //   options: {
          //     cacheDirectory: true,
          //     presets: ['@babel/preset-env'],
          //     plugins: ['@babel/plugin-proposal-class-properties']
          //   }
          // }          
          // {
          //   loader: path.resolve('myloader.js'),
          //   options: {}
          // }
        ]
      },
      {
        test:/\.(s*)css$/,
        include: [
          path.resolve(__dirname, 'src/styles/'),
          path.resolve(__dirname, 'node_modules/.cache/babel-loader/')
        ],
        use:[MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
      }        
   ]
  },
  plugins: [
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // both options are optional
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ],
};