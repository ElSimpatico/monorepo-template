import React, { ReactElement } from 'react';

import { HandleProps } from './handle-props';
import { useStyles } from './styles';

export function Handle(props: HandleProps): ReactElement<HandleProps> {
    const {
        handle: { id, value },
        getHandleProps,
        showValue,
    } = props;
    const classes = useStyles({ ...props });
    return (
        <div className={classes.handle} {...getHandleProps(id)}>
            {showValue && <div className={classes.value}>{value}</div>}
        </div>
    );
}
