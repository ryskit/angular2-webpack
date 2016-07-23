var webpack = require("webpack");


module.exports = {
    entry: "./index.js",

    output: {
        filename: "bundle.js"
    },

    resolve: {
        root: __dirname,
        extensions: ['', '.webpack.js', '.web.js', '.js', '.ts']
    },


    module: {
        loaders: [
            {
                test: /\.ts$/,
                loaders: ['ts', 'angular2-template-loader']
            },
            {
                test: /\.html$/,
                loader: 'html'
            }
        ]
    }
};