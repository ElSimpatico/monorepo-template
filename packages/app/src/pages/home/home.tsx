import React, { ReactElement } from 'react';
import { HelloWorld } from 'ui-core';

export function Home(): ReactElement<{}> {
    return (
        <div>
            <h1>Home page</h1>
            <HelloWorld />
        </div>
    );
}
