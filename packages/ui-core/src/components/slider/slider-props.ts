import { SliderProps as ReactSliderProps } from 'react-compound-slider';

export interface SliderProps extends ReactSliderProps {
    ticksCount?: number;
    showHandleValue?: boolean;
    railHeight?: number;
    handleSize?: number;
}
