import { MINIMAL_VIEWPORTS } from '@storybook/addon-viewport';

export const viewports = {
    ...MINIMAL_VIEWPORTS,
    viewS: {
        name: 'viewport S',
        styles: {
            width: '320px',
            height: '700px',
        },
    },
    viewM: {
        name: 'viewport M',
        styles: {
            width: '764px',
            height: '1024px',
        },
    },
    viewL: {
        name: 'viewport L',
        styles: {
            width: '1016px',
            height: '764px',
        },
    },
    viewXL: {
        name: 'viewport XL',
        styles: {
            width: '1436px',
            height: '800px',
        },
    },
};
