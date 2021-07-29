import { Configuration } from 'webpack';
import { merge } from 'webpack-merge';
import WebpackBase from './config.base';

const configurationDev: Configuration = {
    mode: 'production',
};

const WebpackProd: Configuration = merge(WebpackBase, configurationDev);

export default WebpackProd;
