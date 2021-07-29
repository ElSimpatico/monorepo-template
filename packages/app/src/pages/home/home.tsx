import React, { ReactElement } from 'react';
import { HelloWorld } from 'ui-core';

import { useStyles } from './styles';

export function Home(): ReactElement<any> {
    const classes = useStyles();

    return (
        <div className={classes.wrapper}>
            <h1>Home page</h1>
            <HelloWorld colorText={'red'} />
        </div>
    );
}
