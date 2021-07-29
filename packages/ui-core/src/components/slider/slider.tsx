import React, { ReactElement } from 'react';

import {
    Slider as ReactSlider,
    Handles,
    Tracks,
    Rail,
    Ticks,
} from 'react-compound-slider';
import { SliderProps } from './slider-props';

import { Handle } from './handle';
import { Track } from './track';
import { Tick } from './tick';

import { useStyles } from './styles';

export function Slider(props: SliderProps): ReactElement<SliderProps> {
    const {
        className,
        domain,
        values,
        step,
        mode,
        onUpdate,
        ticksCount,
        showHandleValue,
    } = props;
    const classes = useStyles({ ...props });

    const onUpdateSlider = (values: number[]): void => {
        onUpdate && onUpdate(values);
    };

    return (
        <div className={`${classes.wrapper} ${className}`}>
            <ReactSlider
                className={classes.slider}
                domain={domain}
                values={values}
                step={step}
                mode={mode}
                onChange={onUpdateSlider}
            >
                <Rail>
                    {({ getRailProps }): ReactElement => (
                        <div className={classes.rail} {...getRailProps()}></div>
                    )}
                </Rail>
                <Handles>
                    {({ handles, getHandleProps }): ReactElement => (
                        <div className="slider-handles">
                            {handles.map(
                                (handle): ReactElement => (
                                    <Handle
                                        showValue={showHandleValue}
                                        key={handle.id}
                                        handle={handle}
                                        getHandleProps={getHandleProps}
                                    />
                                ),
                            )}
                        </div>
                    )}
                </Handles>
                <Tracks left={false} right={false}>
                    {({ tracks, getTrackProps }): ReactElement => (
                        <div className="slider-tracks">
                            {tracks.map(
                                ({ id, source, target }): ReactElement => (
                                    <Track
                                        id={id}
                                        key={id}
                                        source={source}
                                        target={target}
                                        getTrackProps={getTrackProps}
                                    />
                                ),
                            )}
                        </div>
                    )}
                </Tracks>
                <Ticks count={ticksCount}>
                    {({ ticks }): ReactElement => (
                        <div className="slider-ticks">
                            {ticks.map(
                                (tick): ReactElement => (
                                    <Tick
                                        key={tick.id}
                                        tick={tick}
                                        count={ticks.length}
                                    />
                                ),
                            )}
                        </div>
                    )}
                </Ticks>
            </ReactSlider>
        </div>
    );
}

Slider.defaultProps = {
    railHeight: 8,
    handleSize: 20,
};
