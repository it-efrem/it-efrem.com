const devConfig = require('../../config/webpack/dev');
const prodConfig = require('../../config/webpack/prod');

const DIR_SRC = `${__dirname}/src`;
const DIR_BUILD = `${__dirname}/build`;
const {MODE} = process.env;

if (MODE === 'development') {
    module.exports = {
        ...devConfig(DIR_SRC, DIR_BUILD),
        devServer: {
            host: 'localhost',
            port: 3000,
            historyApiFallback: true,
        },
    };
}

if (MODE === 'production') {
    module.exports = {
        ...prodConfig,
    };
}