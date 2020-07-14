import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import RegisterPage from '../../Pages/RegisterPage';

describe('<RegisterPage /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render Navbar Component without crashing', () => {
    const { getByTestId } = render(
      <Router>
        <RegisterPage />
      </Router>
    );

    const registerPage = getByTestId('registerPage');

    expect(registerPage).toBeInTheDocument();
  });
});
