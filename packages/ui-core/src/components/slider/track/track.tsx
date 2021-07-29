import React, { ReactElement } from 'react';

import { TrackProps } from './track-props';
import { useStyles } from './styles';

export function Track(props: TrackProps): ReactElement<TrackProps> {
    const { getTrackProps } = props;
    const classes = useStyles({ ...props });
    return <div className={classes.track} {...getTrackProps()} />;
}
