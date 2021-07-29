import { createUseStyles } from 'react-jss';
import { Theme } from '@themes';

import { TickProps } from './tick-props';

export const useStyles = createUseStyles<any, TickProps, Theme>(() => ({
    a: {
        position: 'absolute',
        bottom: '16px',
        marginLeft: -0.5,
        width: 1,
        height: 8,
        backgroundColor: 'silver',
        left: ({ tick: { percent } }): string => `${percent}%`,
    },
    b: {
        position: 'absolute',
        bottom: '0px',
        fontSize: 10,
        textAlign: 'center',
        marginLeft: ({ count }): string => `${-(100 / count) / 2}%`,
        width: ({ count }): string => `${100 / count}%`,
        left: ({ tick: { percent } }): string => `${percent}%`,
    },
}));
