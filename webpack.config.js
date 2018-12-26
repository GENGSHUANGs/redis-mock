var path = require('path');

module.exports = {
        mode: 'production',
        entry: {
            browser: './lib/redis-mock-browser.js',
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: 'redis-mock-browser.min.[hash:8].js',
            libraryTarget: 'umd',
            crossOriginLoading: 'anonymous',
        },
        watch: false,
        // devtool: 'source-map',
        plugins: [
        ],
        optimization: {
            minimize: true,
        },
        module: {
            rules: [
            ],
        },
        resolve: {
            alias: {
                // SSSGameConfig: path.join(__dirname, './adapter/sss-game-config.js'),
            },
            extensions: ['.js'],
            mainFields: ['browser', 'module', 'main'],
        },
        context: __dirname,
        target: 'web',
        stats: 'errors-only',
    };