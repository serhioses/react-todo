var webpack = require('webpack');
var path = 'app/js/dev';
module.exports = {
    cache: true,
    debug: true,
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        path + '/app.jsx'
    ],
    externals: {
        jquery: 'jQuery'
    },
    plugins: [
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ],
    output: {
        path: __dirname,
        filename: 'app.js'
    },
    resolve: {
        extensions: ['', '.js', '.jsx'],
        root: __dirname,
        modulesDirectories: [
            'node_modules',
            './app/js/dev/components',
            './app/js/dev/api'
        ],
        alias: {
            applicationStyles: 'app/css/style.css'
        }
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)/
            }
        ]
    },
    devtool: 'cheap-module-eval-source-map'
};