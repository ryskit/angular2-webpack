var webpack = require("webpack");
var path    = require("path");

module.exports = {
    entry: {
        app: ["./build/main.js"]
    },

    output: {
        path: path.resolve(__dirname, "build"),
        filename: "[name].bundle.js"
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
