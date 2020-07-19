import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import Services from '../../Components/service';

const serviceLabels = {
  label: 'threading',
};
const items = [
  {
    title: 'eyebrows',
    time: '10',
    price: '7',
    description: 'get your eyebrows done',
    label: 'threading',
  },
];

describe('<Services />', () => {
  afterEach(() => {
    cleanup();
  });
  test('render services', () => {
    const { getByTestId } = render(<Services serviceLabels={{}} items={{}} />);
    const serviceInfo = getByTestId('serviceInfo');
    expect(serviceInfo).toBeInTheDocument();
  });
});
