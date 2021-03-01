const { merge } = require('webpack-merge');
const common = require('./webpack.common');
const path = require('path');


module.exports = merge(common, {
    mode: 'development',
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "public/dist")
      },
    devtool: 'inline-source-map',
    devServer: {
        contentBase: path.join(__dirname, 'public'),
    }
})

