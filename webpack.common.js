const path = require('path');

module.exports = {
  mode: 'development',
  entry: {
    main: './src/app.js'
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(gif|svg|jpg|png)$/,
        loader: 'file-loader',
        options: {
          alias: {
            map_images: path.resolve(__dirname, 'public/map_images'),
            images: path.resolve(__dirname, 'public/images'),
          },
        },
      },
      {
        test: /\.(sa|sc|c)ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
    ],
  },
};
