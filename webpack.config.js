var path = require('path');
var webpack = require('webpack');
//var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    {
        context: path.join(__dirname, 'src/js'),
        entry: {
            app: './index.jsx'
        },
        output: {
            path: path.join(__dirname, 'public/js'),
            filename: '[name].js'
        },
        module: {
            rules: [
                {
                    test: /\.js[x]?$/,
                    exclude: /node_modules/,
                    loader: "babel-loader",
                    query:{
                        presets: ['react', 'env']
                    }
                }
            ]
        },
        resolve: {
            extensions: ['.js', '.jsx']
        }
    }/*,
    {
        context: path.join(__dirname, 'src/sass'),
        entry: {
            app: './app.scss'
        },
        output: {
            path: path.join(__dirname, 'public/css'),
            filename: '[name].css'
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    loader: ExtractTextPlugin.extract('style-loader', 'css-loader?-url&sourceMap&minimize!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true')
                }
            ]
        },
        plugins: [
            new ExtractTextPlugin('[name].css')
        ]
    }*/
];