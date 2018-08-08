const VueLoaderPlugin = require("vue-loader/lib/plugin");

const path = require('path');
const webpack = require('webpack');

const BUILD_ROOT = path.join(__dirname, '../dest');
const SRC_ROOT = path.join(__dirname, '../src');

module.exports = {
  context: SRC_ROOT,
  entry: ["babel-polyfill", path.resolve("src", "index.ts")],
  output: {
    filename: "bundle.js",
    path: BUILD_ROOT
  },
  module: {
    rules: [
      {
        test: /\.(ts|tsx)$/,
        loader: "ts-loader",
        exclude: "/node_modules/",
        options: {
          appendTsSuffixTo: [/\.vue$/]
        }
      },
      {
        test: /\.vue$/,
        exclude: /node_modules/,
        loader: "vue-loader"
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: "babel-loader"
      },
      {
        test: /\.(css)$/,
        exclude: /node_modules/,
        use: [
          "vue-style-loader",
          "css-loader"
        ]
      },
      {
        test: /\.(scss|sass)$/,
        exclude: /node_modules/,
        loader: 'style-loader!css-loader!sass-loader'
      },
      {
        test: /\.(jpg|png|json|svg)$/,
        loaders: "url-loader"
      }
    ]
  },
  resolve: {
    extensions: [".ts", ".tsx", ".vue", ".js", ".jsx", ".json"],
    alias: {
      vue$: "vue/dist/vue.esm.js",
      "@": path.resolve("src")
    }
  },
  plugins: [new VueLoaderPlugin()]
};
