import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import Login from '../../Components/Login';

describe('<Login /> Tests', () => {
  afterEach(() => {
    cleanup();
  });
  test('should render login page', () => {
    const { getByTestId } = render(
      <Router>
        <Login />
      </Router>
    );
    const login = getByTestId('login');

    expect(login).toBeInTheDocument();
  });

  test('should be good input in form fields', async () => {
    const { getByLabelText, getByTestId } = render(
      <Router>
        <Login />
      </Router>
    );

    const emailInput = getByLabelText('Email *');
    await act(async () => {
      fireEvent.change(emailInput, {
        target: { id: 'email', value: 'email@gmail.com' },
      });
    });
    expect(emailInput.value).toBe('email@gmail.com');

    const passwordInput = getByLabelText('Password *');
    await act(async () => {
      fireEvent.change(passwordInput, {
        target: { id: 'password', value: 'Passw0rd123' },
      });
      expect(passwordInput.value).toBe('Passw0rd123');
    });
    await act(async () => {
      fireEvent.submit(getByTestId('loginBtn'));
    });
  });
  test('should show error with empty inputs', async () => {
    const { getByTestId, getByText } = render(
      <Router>
        <Login />
      </Router>
    );

    await act(async () => {
      fireEvent.submit(getByTestId('loginBtn'));
    });

    const emailError = getByText('Email is required');
    expect(emailError).toBeInTheDocument();

    const passwordError = getByText('Password is required');
    expect(passwordError).toBeInTheDocument();
  });
});
