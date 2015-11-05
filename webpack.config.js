module.exports = {
    context: __dirname,
    entry: {
        bundle: "./src/client"
    },

    output: {
        path: __dirname + "/public/js/",
        filename: "[name].js"
    },


    module: {
        loaders: [{
            test: /\.jsx?$/,
            exclude: /node_modules/,
            loaders: ["babel-loader"]
        }, ]
    },


    resolve: {
        extensions: ['', '.js', '.jsx']
    }
};