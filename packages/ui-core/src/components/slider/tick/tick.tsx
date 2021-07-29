import React, { ReactElement } from 'react';

import { TickProps } from './tick-props';
import { useStyles } from './styles';

export function Tick(props: TickProps): ReactElement<TickProps> {
    const {
        tick: { value },
    } = props;
    const classes = useStyles({ ...props });

    return (
        <div>
            <div className={classes.a} />
            <div className={classes.b}>{value}</div>
        </div>
    );
}
