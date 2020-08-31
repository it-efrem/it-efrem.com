module.exports = {
    presets: [
        ['@babel/preset-env', {
            modules: false,
            useBuiltIns: 'entry',
            corejs: 3
        }],
        '@babel/preset-react'
    ],
    plugins: [
        "@babel/plugin-proposal-optional-chaining",
        '@babel/plugin-syntax-dynamic-import',
        ['@babel/plugin-proposal-decorators', {legacy: true}],
        ['@babel/plugin-proposal-class-properties', {loose: true}],
        "@babel/plugin-proposal-function-bind"
    ],
};
