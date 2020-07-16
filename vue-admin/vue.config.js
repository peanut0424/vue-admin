const path = require('path')

module.exports = {
    publicPath: process.env.NODE_ENV === 'production' ? '' : '/',
    outputDir: process.env.NODE_ENV === 'production' ? 'dist' : 'devdist',
    lintOnSave: false,
    chainWebpack: (config) => {
    },
    configureWebpack: (config) => {
    },
    productionSourceMap: false,
    css: {
        extract: true,
        sourceMap: false,
        modules: false,
        loaderOptions: {
            sass: {
                prependData: `@import "./src/styles/main.scss";`
            }
        }
    },
    parallel: require('os').cpus().length > 1,
    pwa: {},
    devServer: {
        open: false,
        host: '0.0.0.0',
        port: 8080,
        https: false,
        hotOnly: false,
        proxy: null,
        overlay: {
            warnings: true,
            errors: true
        },
        before: app => {
        }
    },
    pluginOptions: {}
}