import ConfigurationBase from './config.base';
import { terser } from 'rollup-plugin-terser';

export default {
    ...ConfigurationBase,
    plugins: [...ConfigurationBase.plugins, terser()],
};
