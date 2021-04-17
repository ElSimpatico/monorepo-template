import { Theme } from './models';
export const DarkTheme: Theme = {
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
    variables: {
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
            primary: 'white',
            background: 'black',
        },
    },
};
