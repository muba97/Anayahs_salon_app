import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { BrowserRouter as Router } from 'react-router-dom';
import LoginPage from '../../Pages/LoginPage';

describe('<LoginPage /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render Login Page component', () => {
    const { getByTestId } = render(
      <Router>
        <LoginPage />
      </Router>
    );

    const loginPage = getByTestId('loginPage');

    expect(loginPage).toBeInTheDocument();
  });
});
