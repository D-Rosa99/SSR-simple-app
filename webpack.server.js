const path = require("path");
const webpackMerge = require("webpack-merge");
const baseConfig = require("./webpack.base");
const webpackNodeExternal = require("webpack-node-externals");

const serverConfig = {
  target: "node",
  entry: "./src/server/index.js",
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "build"),
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
  externals: [webpackNodeExternal()],
};

module.exports = webpackMerge(baseConfig, serverConfig);
