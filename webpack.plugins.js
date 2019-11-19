const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const webpack = require('webpack');

const isDev = process.env.NODE_ENV === 'development';

module.exports = [
    new ForkTsCheckerWebpackPlugin({ async: false }),
    new webpack.DefinePlugin({
        DEVELOPMENT: JSON.stringify(isDev),
        PRODUCTION: JSON.stringify(!isDev),
    }),
];