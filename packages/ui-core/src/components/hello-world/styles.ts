import { createUseStyles } from 'react-jss';
import { Theme } from '@themes';
import { getMinBreakpoint } from '@utils/breakpoints';

import { StyleProps } from './hello-world-props';

export const useStyles = createUseStyles<any, StyleProps, Theme>((theme) => ({
    wrapper: {
        // color: ({ colorText }) => (colorText ? colorText : 'black'),
        color: ({ colorText }): string =>
            colorText ? colorText : theme.colors.primary,
        backgroundColor: theme.colors.background,
        [getMinBreakpoint(theme.breakpoints.sMin)]: {
            fontSize: '16px',
            lineHeight: '20px',
        },
        [getMinBreakpoint(theme.breakpoints.mMin)]: {
            fontSize: '32px',
            lineHeight: '36px',
        },
        [getMinBreakpoint(theme.breakpoints.lMin)]: {
            fontSize: '40px',
            lineHeight: '44px',
        },
    },
}));
