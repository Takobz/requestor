const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            }
        ]
    },
    resolve: {
        "extensions": [ '.tsx', '.ts', '.js' ]
    },
    devServer: {
        port: 3000
    },
    output: {
        filename: 'bundle.js',
        path: path.join(__dirname, '/dist') 
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/public/index.html'
        })
    ]
}