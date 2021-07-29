import { Theme } from './models';
export const LightTheme: Theme = {
    '@global': {
        html: {
            margin: '0px',
            padding: '0px',
            boxSizing: 'border-box',
        },
        body: {
            margin: '0px',
            padding: '0px',
            boxSizing: 'border-box',
        },
        '*, *::before, *::after': {
            margin: '0px',
            padding: '0px',
            boxSizing: 'border-box',
        },
    },
    breakpoints: {
        xsMax: '319px',
        sMin: '320px',
        sMax: '763px',
        mMin: '764px',
        mMax: '1015px',
        lMin: '1016px',
        lMax: '1435px',
        xlMin: '1436px',
        xlMax: '1436px',
    },
    colors: {
        primary: 'black',
        background: 'white',
    },
    grid: {
        sMin: {
            key: 's',
            gridCols: 2,
            gridGap: '16px',
            margin: '16px',
        },
        mMin: {
            key: 'm',
            gridCols: 6,
            gridGap: '32px',
            margin: '32px',
        },
        lMin: {
            key: 'l',
            gridCols: 12,
            gridGap: '32px',
            margin: '32px',
        },
        xlMin: {
            key: 'xl',
            gridCols: 12,
            gridGap: '32px',
            margin: '32px',
        },
    },
};
