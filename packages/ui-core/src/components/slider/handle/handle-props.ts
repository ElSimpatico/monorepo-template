import { SliderItem, GetHandleProps } from 'react-compound-slider';

export interface HandleProps {
    handle: SliderItem;
    getHandleProps: GetHandleProps;
    showValue?: boolean;
}
