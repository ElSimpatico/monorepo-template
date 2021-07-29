import ConfigurationBase from './config.base';

export default {
    ...ConfigurationBase,
    output: {
        ...ConfigurationBase.output,
        sourcemap: true,
    },
};
