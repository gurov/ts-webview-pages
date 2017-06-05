var path = require('path');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: {
        app: './src/app/index.ts'
    },
    output: {
        filename: '[hash:6].bundle.js',
        path: path.resolve(__dirname, 'dist')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ExtractTextPlugin.extract({
                    fallback: "style-loader",
                    use: 'css-loader'
                })
            },
            {
                test: /\.ts?$/,
                loader: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                use: [
                    'url-loader?limit=10000',
                    'img-loader'
                ]
            }
        ]
    },
    resolve: {
        extensions: [".ts", ".js"]
    },
    plugins: [
        new CopyWebpackPlugin([
            { from: 'src/tips/tips.json' },
            { from: 'src/img/favicon.ico', to: 'img/favicon.ico' }
        ]),
        new ExtractTextPlugin('[hash:6].main.css'),
        new HtmlWebpackPlugin({
            title: 'index',
            template: 'src/templates/index.html',
            filename: 'index.html'
        }),
        new HtmlWebpackPlugin({
            title: 'dashboard',
            template: 'src/templates/dashboard.html',
            filename: 'dashboard.html'
        }),

        new HtmlWebpackPlugin({
            title: 'profile',
            template: 'src/templates/profile.html',
            filename: 'profile.html'
        }),
    ],
    devtool: 'source-map',
    devServer: {
        inline: true,
        contentBase: path.join(__dirname, 'dist'),
        compress: true,
        port: 9000
    }
};