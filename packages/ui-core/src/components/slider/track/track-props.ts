import { TrackItem, GetTrackProps } from 'react-compound-slider';

export interface TrackProps extends TrackItem {
    getTrackProps: GetTrackProps;
}
