import { createUseStyles } from 'react-jss';
import { Theme } from '@themes';

import { TrackProps } from './track-props';

export const useStyles = createUseStyles<any, TrackProps, Theme>(() => ({
    track: {
        position: 'absolute',
        zIndex: 1,
        backgroundColor: '#546C91',
        borderRadius: '5px',
        cursor: 'pointer',
        left: ({ source }): string => `${source.percent}%`,
        width: ({ target, source }): string =>
            `${target.percent - source.percent}%`,
    },
}));
