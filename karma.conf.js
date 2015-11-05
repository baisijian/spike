// Karma configuration
// Generated on Sat Oct 24 2015 16:11:15 GMT+0800 (CST)

module.exports = function(config) {
    config.set({
        // list of files / patterns to load in the browser
        files: [
            'test/*.js',
        ],

        preprocessors: {
            'test/test.js': ['webpack']
        },

        browsers: ['PhantomJS'],

        // frameworks to use
        // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
        frameworks: ['mocha', 'sinon-chai'],


        reporters: ['progress'],
        
        webpack: {
            module: {
                loaders: [{
                    test: /\.jsx?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader"
                }]
            },
            resolve: {
                extensions: ['', '.js', '.jsx']
            }
        },

        webpackMiddleware: {
            noInfo: true
        },

        singleRun: true,

        plugins: [
            'karma-mocha',
            'karma-webpack',
            'karma-sinon-chai',
            'karma-phantomjs-launcher'
        ],
    })
}