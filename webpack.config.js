const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: path.resolve(__dirname, "./src/index.js"),
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.js",
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ["babel-loader"],
      },
      {
        test: /\.css$/,
        exclude: /node_modules/,
        use: ["style-loader", "css-loader"]
      }
    ],
  },
  devServer: {
    port: 3010,
    hot: true, // watches source code and reloads server !! only with caching and cleanup enabled
    open: true, // otwiera przeglądarkę na starcie servera
  },
  plugins: [
    new HTMLWebpackPlugin({
      title: "Test",
      filename: "index.html",
      template: "./src/template.html",
    }),
  ],
};
