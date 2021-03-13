import { resolve } from 'path';
import { Configuration } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';

const WebpackBase: Configuration = {
    mode: 'none',
    entry: resolve(__dirname, '../src/index.tsx'),
    output: {
        clean: true,
        path: resolve(__dirname, '../dist'),
        filename: '[name].js',
    },
    module: {
        rules: [
            {
                test: /.tsx?$/,
                loader: 'awesome-typescript-loader',
                exclude: /node_modules/,
            },
            {
                test: /.s[ac]ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/index.html'),
        }),
    ],
};

export default WebpackBase;
