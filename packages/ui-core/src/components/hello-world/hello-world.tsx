import { Theme } from '@themes';
import React, { ReactElement } from 'react';
import { useTheme } from 'react-jss';

import { HelloWorldProps } from './hello-world-props';
import { useStyles } from './styles';

export function HelloWorld(
    props: HelloWorldProps,
): ReactElement<HelloWorldProps> {
    const theme = useTheme<Theme>();
    const classes = useStyles({ ...props, theme });

    return (
        <div className={classes.wrapper} onClick={props.onClick}>
            <span>{`Hello ${props.name ? props.name : 'World'}!!!`}</span>
            {props.children}
        </div>
    );
}

HelloWorld.defaultProps = {
    colorText: '',
};
