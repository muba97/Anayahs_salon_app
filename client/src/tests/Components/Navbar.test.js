import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from '../../Components/Navbar';

describe('<Navbar /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render Navbar Component without crashing', () => {
    const { getByTestId } = render(
      <Router>
        <Navbar />
      </Router>
    );

    const navbar = getByTestId('navBar');

    expect(navbar).toBeInTheDocument();
  });
});
