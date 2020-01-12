const nextBuildId = require('next-build-id');

const nextComposePlugins = require('next-compose-plugins');
const nextSourceMaps = require('@zeit/next-source-maps');
const nextSass = require('@zeit/next-sass');

let nextConfig = {
    distDir: 'build',
    generateBuildId: () => nextBuildId.sync({dir: __dirname, describe: true}),
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        config.module.rules.push({
            test: /\.(eot|woff|woff2|ttf|svg|png|jpg|jpeg|gif)$/,
            use: {
                loader: 'file-loader',
                options: {
                    fallback: require.resolve('url-loader'),
                    esModule: true,
                    name: `[hash].[ext]`,
                    outputPath: `static/files`,
                }
            }
        });

        return config
    },
    webpackDevMiddleware: config => {
        return config;
    },
};

const sassConfig = [nextSass, {
    cssModules: false,
    cssLoaderOptions: {
        localIdentName: '[local]___[hash:base64:5]',
    },
}];

module.exports = nextComposePlugins(
    sassConfig,
    nextConfig,
    nextSourceMaps,
);