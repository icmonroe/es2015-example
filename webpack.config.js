module.exports = {
  entry: "./app/scripts",
  output: {
    path: __dirname + "/public/javascripts",
    filename: "index.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel' // 'babel-loader' is also a legal name to reference
      }
    ]
  }
};
