const path = require('path');
const nodeExternals = require('webpack-node-externals');
const TerserPlugin = require('terser-webpack-plugin');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
module.exports = {
    mode: 'development',
    target: 'node',
    entry: './server/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'index.js',
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            }
        ],
    },
    plugins: [
    new webpack.DefinePlugin({
    'process.env.BUILD': JSON.stringify(true)
    }),
    new CleanWebpackPlugin(),  
    ],
    externals: [nodeExternals()],
    optimization: {
        minimize: true,
        minimizer: [new TerserPlugin()],
    },
};

