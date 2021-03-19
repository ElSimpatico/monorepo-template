import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { HelloWorld } from '@components';

describe('Hello world Component', () => {
    test('Should be render', () => {
        const wrapper: ReactWrapper = mount(<HelloWorld />);
        expect(wrapper.find('HelloWorld')).toHaveLength(1);
    });
});
