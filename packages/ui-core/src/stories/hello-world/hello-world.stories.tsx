import React, { ReactElement } from 'react';

import { Meta } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import { HelloWorld, HelloWorldProps } from '@components';
import mdx from './hello-world.mdx';

export default {
    title: 'Components/HelloWorld',
    parameters: {
        docs: {
            page: mdx,
        },
    },
    component: HelloWorld,
} as Meta;

export const HelloWorldDefault = (args: HelloWorldProps): ReactElement => {
    return <HelloWorld {...args} onClick={action('HelloWorld click')} />;
};
