const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  mode: "development",
  entry: "./src/index.ts",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist"),
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
      },
      {
        test: /\.html?$/,
        loader: "html-loader",
      },
    ],
  },
  devServer: {
    port: 3000,
    contentBase: path.resolve(__dirname, "dist"),
    hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
      // inject: "body",
      template: "./src/index.html",
      // filename: "index.html",
    }),
  ],
};
