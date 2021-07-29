import { createUseStyles } from 'react-jss';
import { Theme } from '@themes';
import { SliderProps } from './slider-props';

const centerAbsolute = (): any => {
    return {
        top: '50%',
        transform: 'translate(0px, -50%)',
    };
};

export const useStyles = createUseStyles<any, SliderProps, Theme>(() => ({
    wrapper: {
        '& $slider': {
            position: 'relative',
            width: '100%',
            height: '76px',
            border: '1px solid steelblue',
            '& $rail': {
                position: 'absolute',
                width: '100%',
                height: ({ railHeight }): string => `${railHeight}px`,
                borderRadius: '5px',
                backgroundColor: '#8B9CB6',
                cursor: 'pointer',
                ...centerAbsolute(),
            },
            '& .slider-tracks > div': {
                height: ({ railHeight }): string => `${railHeight}px`,
                ...centerAbsolute(),
            },
            '& .slider-handles > div': {
                width: ({ handleSize }): string => `${handleSize}px`,
                height: ({ handleSize }): string => `${handleSize}px`,
                marginLeft: ({ handleSize }): string => `-${handleSize / 2}px`,
                ...centerAbsolute(),
            },
        },
    },
    slider: {},
    rail: {},
}));
