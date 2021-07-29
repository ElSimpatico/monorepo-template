import { createUseStyles } from 'react-jss';
import { Theme } from '@themes';

import { HandleProps } from './handle-props';

export const useStyles = createUseStyles<any, HandleProps, Theme>(() => ({
    handle: {
        left: ({ handle: { percent } }): string => `${percent}%`,
        position: 'absolute',
        zIndex: 2,
        border: 0,
        textAlign: 'center',
        cursor: 'pointer',
        borderRadius: '50%',
        backgroundColor: '#2C4870',
        color: '#333',
        '& $value': {
            fontFamily: 'Roboto',
            fontSize: '11px',
            marginTop: '-16px',
        },
    },
    value: {},
}));
