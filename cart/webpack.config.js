const HtmlWebpackPlugin = require('html-webpack-plugin');
const ModuleFedrationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
module.exports={
    mode: 'development',
    devServer: {
        port: 8082,
    },
    plugins: [
        new ModuleFedrationPlugin({
            name: 'cart',//represent name of component app and is a folder containing remoteEntry.js
            filename: 'remoteEntry.js',//contains all the shared files
            exposes: {
                './CartShow': './src/bootstrap',// exposed files
            },
            shared: ['faker'], 
        }),
        new HtmlWebpackPlugin({
            template: './public/index.html',
        }),
    ],
};