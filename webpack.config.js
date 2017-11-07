const webpack = require('webpack'),
    path = 'app/js/dev';

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

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
        }),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false
            }
        })
    ],
    output: {
        path: 'app/js/dist',
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
            applicationStyles: 'app/css/style.css',
            actions: 'app/js/dev/actions/actions.jsx',
            reducers: 'app/js/dev/reducers/reducers.jsx',
            configureStore: 'app/js/dev/store/configureStore.jsx'
        }
    },
    module: {
        loaders: [
            {
                loader: 'babel-loader',
                query: {
                    presets: ['react', 'es2015'],
                    plugins: ['transform-object-rest-spread']
                },
                test: /\.jsx?$/,
                exclude: /(node_modules)/
            }
        ]
    },
    devtool: process.env.NODE_ENV === 'production' ? false : 'cheap-module-eval-source-map',
    watch: process.env.NODE_ENV === 'production' ? false : true
};