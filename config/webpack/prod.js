const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const autoprefixer = require('autoprefixer');
const EraserPlugin = require('./plugins/EraserPlugin');

module.exports = (DIR_SRC, DIR_BUILD) => ({
    mode: 'production',
    devtool: false,
    output: {
        path: process.cwd() + DIR_BUILD,
        publicPath: '/',
        filename: '[name].[hash].js',
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.scss', '.css']
    },
    plugins: [
        new EraserPlugin({
            relativePath: DIR_BUILD
        }),
        new HtmlWebpackPlugin({
            template: `../../config/document/index.html`,
            favicon: `../../config/document/favicon.ico`,
        }),
        new CopyPlugin({
            patterns: [
                {from: `../../config/document/pages`, to: `${process.cwd() + DIR_BUILD}/pages`}
            ]
        }),
        new MiniCssExtractPlugin(),
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
});