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
                test: /.(c|sa|sc)ss$/,
                use: ['style-loader', 'css-loader', 'sass-loader'],
            },
        ],
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
        alias: {
            '@components': resolve(__dirname, '../src/components/'),
            '@pages': resolve(__dirname, '../src/pages/'),
            '@shared': resolve(__dirname, '../src/shared/'),
            '@utils': resolve(__dirname, '../src/utils/'),
        },
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: resolve(__dirname, '../src/index.html'),
        }),
    ],
};

export default WebpackBase;
