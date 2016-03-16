module.exports = {
  entry: "./client/js/App.js",
  output:{
    filename: "client/public/bundle.js"
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },

      { test: /\.(png|jpg|woff|woff2|eot|ttf|svg)$/,
        loader: 'url-loader?limit=100000'
      },
      resolve: {
        modulesDirectories: ['node_modules', 'client/bower_components'],
        alias: {
          'bower': __dirname + '/client/bower_components'
        }
      },
      {
        test: /\.jpg$/,
        loader: 'file-loader'
      }
    ]
  }
};
