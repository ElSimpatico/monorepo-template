import React from 'react';
import { mount, ReactWrapper } from 'enzyme';

import { Home } from '@pages';

describe('Home world Component', () => {
    test('Should be render', () => {
        const wrapper: ReactWrapper = mount(<Home />);
        expect(wrapper.find('Home')).toHaveLength(1);
    });
});
