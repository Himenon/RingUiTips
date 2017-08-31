const VENDOR = [
    'react',
    'react-dom'
];

module.exports = {
    cache: true,
    entry: {
        app: "./src/index.tsx",
        vendor: VENDOR,
    },
    output: {
        filename: "[name].js",
        path: __dirname + "/dist",
    },

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
    externals: {
        "react": "React",
        "react-dom": "ReactDOM"
    },
};