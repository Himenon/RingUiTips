const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ringUiWebpackConfig = require('@jetbrains/ring-ui/webpack.config');

const VENDOR = [
    'react',
    'react-dom'
];

const PATHS = {
    app: path.join(__dirname, './frontend/js/index.tsx'),
    build: path.join(__dirname, '/dist')
};

ringUiWebpackConfig.loaders.svgSpriteLoader.include.push(
    require('@jetbrains/logos'),
    require('@jetbrains/icons')
);

module.exports = {
    cache: true,
    entry: {
        vendor: VENDOR,
        app: PATHS.app,
    },
    output: {
        // filename: "[name].[hash].js",
        filename: "[name].js",
        path: PATHS.build,
        publicPath: '/static',
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'frontend/index.html'),
            hash: true,
            filename: 'index.html',
            inject: 'body'
        }),
    ],
    // Enable sourcemaps for debugging webpack's output.
    devtool: "source-map",

    resolve: {
        // Add '.ts' and '.tsx' as resolvable extensions.
        extensions: [".ts", ".tsx", ".js", ".json"],
        modules: ['node_modules'],
        alias: {
            react: path.resolve('./node_modules/react'),
            'react-dom': path.resolve('./node_modules/react-dom'),
            '@jetbrains/ring-ui': path.resolve('./node_modules/@jetbrains/ring-ui'),
        }
    },

    module: {
        rules: [
            ...ringUiWebpackConfig.config.module.rules,
            {
                test: /\.ts|\.tsx$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    {
                        loader: 'awesome-typescript-loader',
                    },
                ],
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            },
            {
                test: /\.jpe?g$|\.gif$|\.png$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]',
                    outputPath: 'images/',
                    publicPath: 'images',
                }
            },
            {
                test: /\.svg$/,
                loader: 'file-loader?limit=10000&mimetype=image/svg+xml'
            },
        ]
    },
};