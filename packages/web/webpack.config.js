const devConfig = require('../../config/webpack/dev');
const prodConfig = require('../../config/webpack/prod');

const DIR_SRC = `${__dirname}/src`;
const DIR_BUILD = `${__dirname}/build`;
const {MODE} = process.env;

if (MODE === 'development') {
    module.exports = {
        ...devConfig(DIR_SRC, DIR_BUILD),
        devServer: {
            host: '0.0.0.0',
            port: 3000,
            historyApiFallback: true,
            disableHostCheck: true, // remove it after move to start:prod in Dockerfile
        },
    };
}

if (MODE === 'production') {
    module.exports = {
        ...prodConfig,
    };
}