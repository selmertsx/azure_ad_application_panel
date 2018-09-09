module.exports = {
  mode: 'development',
  entry: './src/App.tsx',
  output: {
    filename: 'bundle.js',
    path: __dirname + "/dist"
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, loader: "awesome-typescript-loader" }
    ]
  }
}
