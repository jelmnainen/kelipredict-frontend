const webpack = require('webpack');

module.exports = {
    entry: './frontend/src/index.js',
    output: {
        path: './frontend/bin',
        filename: 'app.bundle.js'
    },
    module: {
        loaders: [{
            test: /\.js$/,
            exclude: /node_modules/,
            loader: 'babel-loader',
        }]
    },
    plugins: [
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.OccurrenceOrderPlugin(true),
        // new webpack.optimize.UglifyJsPlugin({
        //     compress: {
        //         warnings: false,
        //     },
        //     output: {
        //         comments: false,
        //     },
        // }),

    ]
};
