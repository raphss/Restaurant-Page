const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {

    module: {
        rules: [{
                test: /\.css$/i,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/i,
                type: 'asset/resource',
            },
        ],
    },

    entry: {
        index: './src/index.js',
    },

    plugins: [
        new HtmlWebpackPlugin({
            template: './src/template.html',
            favicon: './src/files/icon.ico',
            title: 'アスガルド',
            filename: 'index.html',
            inject: 'body',
            scriptLoading: 'defer',
        }),
        new CopyWebpackPlugin({
            patterns: [{
                from: 'src/images',
                to: 'images'
            }, ],
        }),
    ],

    output: {
        filename: '[name].bundle.js',
        path: path.resolve(__dirname, 'dist'),
        clean: true,
    },

    optimization: {
        runtimeChunk: 'single',
    },

};