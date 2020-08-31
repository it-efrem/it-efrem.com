const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
const autoprefixer = require('autoprefixer');

module.exports = (DIR_SRC, DIR_BUILD) => ({
    mode: 'development',
    devtool: 'inline-source-map',
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.scss', '.css']
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: `${DIR_SRC}/public/index.html`,
            // favicon: `${DIR_SRC}/public/favicon.ico`,
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
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [autoprefixer]
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
                        }
                    }
                ]
            },
            {
                test: /\.module\.(sass|scss|css)$/,
                use: [
                    'style-loader',
                    {
                        loader: "css-loader",
                        options: {
                            modules: {
                                localIdentName: "[name]_[local]_[hash:base64]",
                            },
                            localsConvention: 'camelCaseOnly',
                            sourceMap: true
                        }
                    },
                    {
                        loader: 'postcss-loader',
                        options: {
                            sourceMap: true,
                            plugins: [autoprefixer]
                        }
                    },
                    'resolve-url-loader',
                    {
                        loader: 'sass-loader',
                        options: {
                            sourceMap: true
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