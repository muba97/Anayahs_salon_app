import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import NewServicePage from '../../Pages/NewServicePage';

describe('<NewServicePage /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render Navbar Component without crashing', () => {
    const { getByTestId } = render(
      <Router>
        <NewServicePage />
      </Router>
    );
    const newServicePage = getByTestId('newServicePage');

    expect(newServicePage).toBeInTheDocument();
  });
});
