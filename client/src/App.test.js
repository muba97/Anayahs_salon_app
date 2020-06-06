import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('<App /> Tests', () => {
  const shallowWrapper = shallow(<App />);

  test('renders App', () => {
    expect(shallowWrapper).toHaveLength(1);
  });
});


