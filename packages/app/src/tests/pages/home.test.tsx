import React from 'react';
import { ReactWrapper } from 'enzyme';

import { MountWrappers } from '@utils/testing';

import { Home } from '@pages';

describe('Home world Component', () => {
    test('Should be render', () => {
        const wrapper: ReactWrapper = MountWrappers(<Home />);
        expect(wrapper.find('Home')).toHaveLength(1);
    });
});
