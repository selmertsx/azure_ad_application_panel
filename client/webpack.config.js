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
    contentBase: path.join(__dirname, '/src/static'), // index.htmlの格納場所
    historyApiFallback: true, // history APIが404エラーを返す場合にindex.htmlに飛ばす
    inline: true, // ソース変更時リロードモード
    hot: true, // HMR(Hot Module Reload)モード
    port: config.get('PORT') + 1, // 起動ポート,
    host: '0.0.0.0',
  },

}
