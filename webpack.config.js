const webpack = require("webpack");
const CopyWebpackPlugin = require("copy-webpack-plugin");


module.exports = {
    entry: "./app-element.js",
    output: {
      filename: "./bundle.js"
    },
    plugins: [
      new CopyWebpackPlugin([
        { from: "index.html", to: "./" },
        { from: "nav-menu.css", to: "./" }
      ])
    ]
  }