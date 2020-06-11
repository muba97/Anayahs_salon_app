import React from 'react';
import { shallow } from 'enzyme';
import ProfilePage from '../../Pages/ProfilePage';

describe('<Navbar /> Tests', () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<ProfilePage />);
  });

  test('should render Navbar Component without crashing', () => {
    expect(shallowWrapper).toHaveLength(1);
  });
});
