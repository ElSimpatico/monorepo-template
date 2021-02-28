import React, { ReactElement } from 'react';

import { HelloWorldProps } from './hello-world-props';

export function HelloWorld(props: HelloWorldProps): ReactElement {
    return (
        <div onClick={props.onClick}>
            <span>{`Hello ${props.name ? props.name : 'World'}!!!`}</span>
            {props.children}
        </div>
    );
}
