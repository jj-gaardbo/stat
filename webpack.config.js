const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModernizrWebpackPlugin = require('modernizr-webpack-plugin');
const path = require('path');

const htmlWebpackPlugin = new HtmlWebpackPlugin({
    title: 'Template',
    template: '../public/index.html',
    filename: 'index.html',
    hash: true,
    inject: 'body'
});

const HotReloader = new webpack.HotModuleReplacementPlugin();

const modernizrConfig = {
    'options': [
        'setClasses'
    ],
    'feature-detects': [
        'input',
        'canvas',
        'css/resize'
    ],
    'htmlWebpackPlugin': htmlWebpackPlugin,
    'minify': {
        output: {
            comments: true,
            beautify: true
        }
    }
};

module.exports = {
    context: __dirname + '/src',
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, './build'),
        filename: 'bundle.js'
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,         // Match both .js and .jsx files
                exclude: /node_modules/,
                loader: "babel-loader",
                query:
                    {
                        presets:['react']
                    }
            },
            { test: /\.scss$/, loaders: ['style-loader', 'css-loader', 'sass-loader'], exclude: /node_modules/ },
            { test: /\.(png|jpg)$/, loader: 'url-loader?limit=8192' },
        ]
    },
    plugins: [
        htmlWebpackPlugin,
        HotReloader
    ]
}
