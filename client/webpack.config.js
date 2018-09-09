const path = require('path')
const config = require('config') //どうやら環境変数を簡単にimportできるようになるようだ

module.exports = {
  mode: 'development',
  entry: './src/App.tsx',
  resolve: {
    modules: ['src', 'node_modules'], // 対象のフォルダ
    extensions: [".ts", ".tsx", ".js", ".json"]
  },

  output: {
    publicPath: '/', // デフォルトルートにしないとHMRは有効にならない
    filename: 'bundle.js'
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname, '/src/static'),
    historyApiFallback: true,
    inline: true,
    port: config.get('PORT') + 1,
    host: '0.0.0.0',
  }
}
