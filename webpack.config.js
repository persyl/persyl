var webpack = require("webpack"); //Needed to below be able to do new webpack.DefinePlugin...

module.exports = {
     context: __dirname,
    entry: "./index.js",
    output: {
        path: __dirname + "/dist",
        filename: "bundle.js"
    },
    module: {
        loaders: [{
            exclude: /node_modules/,
            loaders: ['babel-loader']
        }]
    },
    plugins: [
        new webpack.DefinePlugin({
            "process.env": {
                NODE_ENV: JSON.stringify("production")
            }
        })
    ]
};
