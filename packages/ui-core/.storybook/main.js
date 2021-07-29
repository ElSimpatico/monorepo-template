const path = require('path');

module.exports = {
    stories: ['../src/**/*stories.@(js|ts|md)x'],
    addons: [
        '@storybook/addon-docs',
        '@storybook/addon-controls',
        '@storybook/addon-viewport',
        '@storybook/addon-actions',
        '@storybook/addon-toolbars',
    ],
    webpackFinal: async (config, { configType }) => {
        config.resolve.alias = {
            ...config.resolve.alias,
            '@components': path.resolve(__dirname, '../src/components/'),
            '@themes': path.resolve(__dirname, '../src/themes/'),
            '@utils': path.resolve(__dirname, '../src/utils/'),
        };

        // Return the altered config
        return config;
    },
};
