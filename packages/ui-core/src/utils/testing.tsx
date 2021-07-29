import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { ThemeProvider } from '@components';

export function MountWrappers(
    children: string | JSX.Element | JSX.Element[],
): ReactWrapper {
    return mount(<ThemeProvider theme={'light'}>{children}</ThemeProvider>);
}
