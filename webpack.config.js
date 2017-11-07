const webpack = require('webpack'),
    envFile = require('node-env-file'),
    path = require('path');

process.env.NODE_ENV = process.env.NODE_ENV || 'development';

try {
    envFile(path.join(__dirname, 'config/' + process.env.NODE_ENV.trim() + '.env'));
} catch (err) {}

// console.log(process.env);

module.exports = {
    cache: true,
    debug: true,
    entry: [
        'script!jquery/dist/jquery.min.js',
        'script!foundation-sites/dist/js/foundation.min.js',
        'app/js/dev/app.jsx'
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
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                API_KEY: JSON.stringify(process.env.API_KEY),
                AUTH_DOMAIN: JSON.stringify(process.env.AUTH_DOMAIN),
                DATABASE_URL: JSON.stringify(process.env.DATABASE_URL),
                PROJECT_ID: JSON.stringify(process.env.PROJECT_ID),
                STORAGE_BUCKET: JSON.stringify(process.env.STORAGE_BUCKET),
                MESSAGING_SENDER_ID: JSON.stringify(process.env.MESSAGING_SENDER_ID)
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