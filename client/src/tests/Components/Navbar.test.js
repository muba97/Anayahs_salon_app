import React from 'react';
import { shallow } from 'enzyme';
import Navbar from '../../Components/Navbar';

describe('<Navbar /> Tests', () => {
  let shallowWrapper;

  beforeEach(() => {
    shallowWrapper = shallow(<Navbar />);
  });

  test('should render Navbar Component without crashing', () => {
    expect(shallowWrapper).toHaveLength(1);
  });
});
