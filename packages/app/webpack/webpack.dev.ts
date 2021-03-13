import { Configuration, HotModuleReplacementPlugin } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import WebpackBase from './webpack.base';

interface ConfigurationDev extends Configuration {
    devServer?: DevServerConfiguration;
}

const configurationDev: ConfigurationDev = {
    mode: 'development',
    plugins: [new HotModuleReplacementPlugin()],
    devServer: {
        historyApiFallback: true,
        hot: true,
        open: true,
    },
};

const WebpackDev: Configuration = merge(WebpackBase, configurationDev);

export default WebpackDev;
