const webpackPlugins = [];

module.exports = {
    configureWebpack: {
        plugins: webpackPlugins,
        devtool: 'source-map',
    },
    devServer: {
        host: 'localhost',
    },
    pages: {
        index: {
            entry: 'src/main.js',
            template: 'public/index.html',
            filename: 'index.html',
            title: 'Index Page',
            chunks: ['chunk-vendors', 'chunk-common', 'index'],
        },
    },
    productionSourceMap: false,
    publicPath: '/',
    outputDir: 'dist',
    assetsDir: 'finder',
    indexPath: 'index.html',
};
