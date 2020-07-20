import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import ServicePage from '../../Pages/ServicePage';

describe('<ServicePage /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render Navbar Component without crashing', () => {
    const { getByTestId } = render(
      <Router>
        <ServicePage />
      </Router>
    );
    const servicePage = getByTestId('servicePage');

    expect(servicePage).toBeInTheDocument();
  });
});
