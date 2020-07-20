import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import Services from '../../Components/Services';

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
const newService = true;

describe('<Services />', () => {
  afterEach(() => {
    cleanup();
  });
  test('render services', () => {
    const { getByTestId } = render(
      <Router>
        <Services
          serviceLabels={serviceLabels.label}
          items={items}
          newService={newService}
        />
      </Router>
    );
    const serviceInfo = getByTestId('serviceInfo');
    expect(serviceInfo).toBeInTheDocument();
  });

  test('values should show up once you click on the button', async () => {
    const { getByTestId, queryAllByTestId } = render(
      <Router>
        <Services
          serviceLabels={serviceLabels.label}
          items={items}
          newService={newService}
        />
      </Router>
    );
    await act(async () => {
      fireEvent.click(getByTestId('openButton'));
    });

    const serviceItems = queryAllByTestId('serviceItems');
    expect.arrayContaining(serviceItems);
  });
});
