import React from 'react';
import { ReactWrapper } from 'enzyme';

import { MountWrappers } from '@utils/testing';
import { HelloWorld } from '@components';

describe('Hello world Component', () => {
    test('Should be render', () => {
        const wrapper: ReactWrapper = MountWrappers(<HelloWorld />);
        expect(wrapper.find('HelloWorld')).toHaveLength(1);
    });
});
