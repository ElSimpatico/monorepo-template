import { Configuration } from 'webpack';
import { Configuration as DevServerConfiguration } from 'webpack-dev-server';
import { merge } from 'webpack-merge';
import WebpackBase from './config.base';

interface ConfigurationDev extends Configuration {
    devServer?: DevServerConfiguration;
}

const configurationDev: ConfigurationDev = {
    mode: 'development',
    devServer: {
        historyApiFallback: true,
        hot: true,
        open: true,
        port: 3000,
    },
};

const WebpackDev: Configuration = merge(WebpackBase, configurationDev);

export default WebpackDev;
