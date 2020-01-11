const {CleanWebpackPlugin} = require('clean-webpack-plugin');
const withPlugins = require('next-compose-plugins');
const withSourceMaps = require('@zeit/next-source-maps');
const sass = require('@zeit/next-sass');

let nextConfig = {
    distDir: 'build',
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|jpeg|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    fallback: require.resolve('url-loader'),
                    esModule: true,
                    name: '[hash].[ext]',
                    outputPath: 'static/files',
                }
            }
        });

        config.plugins.push(
            new CleanWebpackPlugin()
        );

        return config
    },
    webpackDevMiddleware: config => {
        return config;
    },
};

const sassConfig = [sass, {
    cssModules: false,
    cssLoaderOptions: {
        localIdentName: '[local]___[hash:base64:5]',
    },
}];

module.exports = withPlugins(
    sassConfig,
    nextConfig,
    withSourceMaps,
);