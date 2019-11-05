const withSourceMaps = require('@zeit/next-source-maps');
const withSass = require('@zeit/next-sass');
const withCSS = require('@zeit/next-css');

let config = {
    webpack: (config, {buildId, dev, isServer, defaultLoaders, webpack}) => {
        return config;
    },
    webpackDevMiddleware: config => {
        return config;
    },
}

module.exports = withSourceMaps(
    withSass(
        withCSS(config)
    )
);