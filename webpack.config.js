const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './src/app.tsx',
    mode: 'development',
    output: {
        filename: 'dist.js',
        path: path.resolve(__dirname, 'build'),
    },
    resolve: {
        modules: [__dirname, './src/js/components', 'node_modules'],
        extensions: ['.ts', '.tsx', '.js', '.jsx'],
        alias: {
            assets: path.resolve(__dirname, 'src/assets/'),
            components: path.resolve(__dirname, 'src/components/'),
            container: path.resolve(__dirname, 'src/components/'),
            hooks: path.resolve(__dirname, 'src/js/hooks/'),
            reducers: path.resolve(__dirname, 'src/js/reducers/'),
            js: path.resolve(__dirname, 'src/js/'),
            utils: path.resolve(__dirname, 'src/js/utils/'),
        },
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx|ts|tsx)$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.(png|jpe?g)$/i,
                use: [
                    {
                        loader: 'file-loader',
                        options: {
                            esModule: false,
                        },
                    },
                ],
            },
            {
                test: /\.js$/,
                loader: 'source-map-loader',
            },
        ],
    },
    devServer: {
        static: path.join(__dirname, 'public'),
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            filename: 'index.html',
            inject: true,
            template: path.resolve(__dirname, 'src', 'index.html'),
        }),
    ],
};
