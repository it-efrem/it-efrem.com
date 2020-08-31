const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');

const DIR_PUBLIC = '/';
const DIR_SRC = `${__dirname}/src`;
const DIR_BUILD = `${__dirname}/build`;

// ToDo: Need review it config

module.exports = {
    mode: 'production',
    devtool: false,
    output: {
        path: DIR_BUILD,
        publicPath: DIR_PUBLIC,
        filename: '[name].[hash].js',
        library: '[name]',
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.scss', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${DIR_SRC}/public/index.html`,
            favicon: `${DIR_SRC}/public/favicon.ico`,
        }),
        new CopyPlugin({
            patterns: [
                {from: `${DIR_SRC}/public`, to: `${DIR_BUILD}/public`}
            ]
        }),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                loader: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(sass|scss|css)$/,
                exclude: /\.module\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false,
                            plugins: [autoprefixer]
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.module\.(sass|scss|css)$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[hash:base64]",
                            },
                            localsConvention: 'camelCaseOnly',
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: false,
                            plugins: [autoprefixer]
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: false
                        }
                    }
                ]
            },
            {
                test: /\.(pdf|gif|png|jpg)$/,
                loader: 'url-loader',
                options: {
                    name: '[path][name].[ext]',
                    limit: 4096
                }
            },
            {
                test: /\.(ico|ttf|otf|eot|woff|woff2|xml|svg|xlsx)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            }
        ]
    }
};