const path = require("path");

module.exports = {
  mode: "development",
  entry: {
    index: "./src/index.js",
  },

  // output  设置打包以后的文件的规则
  output: {
    // path 一定是绝对目录
    path: path.resolve(__dirname, "dist"),
    filename: "[name].js",
  },

  module: {
    // 被加载的模块的解析处理规则
    rules: [
      {
        test: /\.txt$/,
        use: "raw-loader",
      },
      {
        test: /\.(png|jpe?g|gif)$/,
        use: {
          loader: "url-loader",
          options: {
            name: "[name]_[hash].[ext]",
            outputPath: "./images",
            publicPath: "../dist/images",
            limit: 100,
          },
        },
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          {
            loader: "css-loader",
            options: {
              url: true,
              import: true,
              sourceMap: false,
            },
          },
        ],
      },
    ],
  },
};
