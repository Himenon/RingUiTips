const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const VENDOR = [
    'react',
    'react-dom'
];

const PATHS = {
    app: path.join(__dirname, './src/index.tsx'),
    build: path.join(__dirname, '/dist')
};

module.exports = {
    cache: true,
    entry: {
        vendor: VENDOR,
        app: PATHS.app,
    },
    output: {
        filename: "[name].[hash].js",
        path: PATHS.build,
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: Infinity,
        }),
        new HtmlWebpackPlugin({
            template: path.join(__dirname, 'index.html'),
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
        modules: ['node_modules']
    },

    module: {
        rules: [
            {
                test: /\.ts|\.tsx$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    },
                    // {
                    //     loader: 'awesome-typescript-loader',
                    // }
                ],
            },
            {
                test: /\.js$/,
                enforce: "pre",
                loader: "source-map-loader"
            }
        ]
    },
    // externals: {
    //     "react": "React",
    //     "react-dom": "ReactDOM"
    // },
};