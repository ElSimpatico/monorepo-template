import { viewports, argTypes } from './parameters';
import { withThemeProvider } from './decorators';
import { theme } from './globals';

export const globalTypes = {
    theme,
};

export const parameters = {
    viewport: {
        viewports,
    },
    controls: {
        expanded: true,
    },
    argTypes: {
        ...argTypes,
    },
    layout: 'fullscreen',
};

export const decorators = [withThemeProvider];
