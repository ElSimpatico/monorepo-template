import React, { ReactElement, useState } from 'react';
import { createUseStyles } from 'react-jss';

import { Meta } from '@storybook/react';

import { Slider, SliderProps } from '@components';
import mdx from './slider.mdx';
import { Theme } from '@themes/models';

export default {
    title: 'Components/Slider',
    parameters: {
        docs: {
            page: mdx,
        },
    },
    component: Slider,
    argTypes: {
        railHeight: {
            control: { type: 'range', min: 8, max: 48, step: 1 },
        },
        handleSize: {
            control: { type: 'range', min: 8, max: 48, step: 1 },
        },
    },
} as Meta;

const useStyles = createUseStyles<any, any, Theme>(() => ({
    wrapper: {
        '--lateralSpace': 10,
        position: 'relative',
        padding: '0px calc(var(--lateralSpace) * 1px)',
        '& $detectTicks': {
            display: 'flex',
            justifyContent: 'space-between',
            position: 'absolute',
            bottom: '0px',
            width: 'calc(100% - calc(var(--lateralSpace) * 2px))',
        },
    },
    detectTicks: {},
}));

export const SliderDefault = (args: SliderProps): ReactElement<SliderProps> => {
    const classes = useStyles();
    return (
        <div className={classes.wrapper}>
            <Slider
                {...args}
                domain={[0, 10]}
                values={[2, 8]}
                step={1}
                mode={2}
            />
        </div>
    );
};
export const SliderWithDetectTicks = (
    args: SliderProps,
): ReactElement<SliderProps> => {
    const [leftTick, setLeftTick] = useState<number>(2);
    const [rightTick, setRightTick] = useState<number>(8);

    const classes = useStyles();

    const onUpdateSlider = (values: number[]): void => {
        setLeftTick(values[0]);
        setRightTick(values[1]);
    };

    return (
        <div className={classes.wrapper}>
            <Slider
                {...args}
                domain={[0, 10]}
                values={[leftTick, rightTick]}
                step={1}
                mode={2}
                ticksCount={-1}
                onUpdate={onUpdateSlider}
            />
            <div className={classes.detectTicks}>
                <span>{`${leftTick} €`}</span>
                <span>{`${rightTick} €`}</span>
            </div>
        </div>
    );
};
