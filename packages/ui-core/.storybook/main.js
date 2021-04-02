const path = require('path');

module.exports = {
    stories: ['../src/stories/**/*[.stories].@(js|ts|md)x'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-viewport',
        '@storybook/addon-actions',
    ],
    webpackFinal: async (config, { configType }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.resolve(__dirname, '../src/components/'),
        };

        // Return the altered config
        return config;
    },
};
