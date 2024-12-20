const path = require('node:path')
module.exports = {
    entry: './src/index.jsx',
    output: {
        path: path.resolve(__dirname, './dist'),
        filename: 'bundle.js',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader'
                }
            }
        ]
    },
    devServer: {
        static: './dist'
    },
    resolve: {
        extensions: [
            '.js',
            '.jsx',
        ]
    }
}