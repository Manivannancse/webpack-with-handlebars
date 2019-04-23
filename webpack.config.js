const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  plugins: [
    new HtmlWebpackPlugin({
      title: "Webpack demo",
    })
  ],
  module: {
    rules: [
      { test: /\.handlebars$/, loader: "handlebars-loader" }
    ]
  }
};