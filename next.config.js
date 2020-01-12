const {PHASE_PRODUCTION_BUILD, PHASE_EXPORT} = require('next-server/constants');
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
                    name: (PHASE_PRODUCTION_BUILD + PHASE_EXPORT) ? '[hash:base64].[ext]' : '[path]__[name].[ext]',
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

const sassConfig = [
    nextSass, {
        cssModules: true,
        cssLoaderOptions: {
            importLoaders: 1,
            localIdentName: '[path]___[local]',
        },
        [PHASE_PRODUCTION_BUILD + PHASE_EXPORT]: {
            cssLoaderOptions: {
                localIdentName: '[hash:base64]',
            },
        }
    }];

module.exports = nextComposePlugins([
        sassConfig,
        nextSourceMaps,
    ],
    nextConfig
);