import React, { ReactElement } from 'react';

import { HelloWorldProps } from './hello-world-props';
import { useStyles } from './styles';

export function HelloWorld(
    props: HelloWorldProps,
): ReactElement<HelloWorldProps> {
    const classes = useStyles({ colorText: props.colorText });

    return (
        <div className={classes.wrapper} onClick={props.onClick}>
            <span>{`Hello ${props.name ? props.name : 'World'}!!!`}</span>
            {props.children}
        </div>
    );
}
