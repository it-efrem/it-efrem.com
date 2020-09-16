const devConfig = require('../../config/webpack/dev');
const prodConfig = require('../../config/webpack/prod');

const DIR_SRC = `/src`;
const DIR_BUILD = `/build`;
const {MODE} = process.env;

if (MODE === 'development') {
    module.exports = {
        ...devConfig(DIR_SRC, DIR_BUILD),
        devServer: {
            host: '0.0.0.0',
            port: 3000,
            historyApiFallback: true,
            // disableHostCheck: true,
        },
    };
}

if (MODE === 'production') {
    module.exports = {
        ...prodConfig(DIR_SRC, DIR_BUILD),
    };
}