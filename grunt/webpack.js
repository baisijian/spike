var webpackDevConfig = require('../webpack.config.js');

module.exports = {
    options: webpackDevConfig,
    start: {},
    watch: {
        watch: true,
        keepalive: true
    }
};