import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import { BrowserRouter as Router } from 'react-router-dom';
import Register from '../../Components/Register';

describe('<Register /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render ProfileInfo', () => {
    const { getByTestId } = render(
      <Router>
        <Register />
      </Router>
    );
    const register = getByTestId('register');
    expect(register).toBeInTheDocument();
  });

  test('Input good info in form fields ', async () => {
    const { getByTestId, getByLabelText } = render(
      <Router>
        <Register />
      </Router>
    );

    const firstNameInput = getByLabelText('First Name *');
    await act(async () => {
      fireEvent.change(firstNameInput, { target: { id: 'firstName', value: 'John' } });
    });
    expect(firstNameInput.value).toBe('John');

    const lastNameInput = getByLabelText('Last Name *');
    await act(async () => {
      fireEvent.change(lastNameInput, {
        target: { id: 'lastName', value: 'Doe' },
      });
    });
    expect(lastNameInput.value).toBe('Doe');

    const emailInput = getByLabelText('Email *');
    await act(async () => {
      fireEvent.change(emailInput, {
        target: { id: 'email', value: 'example@gmail.com' },
      });
    });
    expect(emailInput.value).toBe('example@gmail.com');

    const birthDayInput = getByLabelText('Birthday *');
    await act(async () => {
      fireEvent.change(birthDayInput, {
        target: { id: 'birthDay', value: '01/01/1980' },
      });
    });
    expect(birthDayInput.value).toBe('01/01/1980');

    const phoneNumberInput = getByLabelText('Phone Number *');
    await act(async () => {
      fireEvent.change(phoneNumberInput, {
        target: { id: 'phoneNumber', value: '111-111-1111' },
      });
    });
    expect(phoneNumberInput.value).toBe('111-111-1111');

    const passwordInput = getByLabelText('Password *');
    await act(async () => {
      fireEvent.change(passwordInput, {
        target: { id: 'password', value: 'P@ssw0rd' },
      });
    });
    expect(passwordInput.value).toBe('P@ssw0rd');

    const passwordConfirmInput = getByLabelText('Confirm Password *');
    await act(async () => {
      fireEvent.change(passwordConfirmInput, {
        target: { id: 'passwordConfirm', value: 'P@ssw0rd' },
      });
    });
    expect(passwordConfirmInput.value).toBe('P@ssw0rd');

    await act(async () => {
      fireEvent.submit(getByTestId('signup-submit'));
    });

    const passwordError = getByLabelText(
      'At least one upper case, one lower case, one number, and one special character'
    );
    expect(passwordError).toBeInTheDocument();
  });

  test('Empty user input error checks', async () => {
    const { getByTestId, getByLabelText } = render(
      <Router>
        <Register />
      </Router>
    );

    await act(async () => {
      fireEvent.submit(getByTestId('signup-submit'));
    });

    const firstNameError = getByLabelText(/First Name is Required/i);
    expect(firstNameError).toBeInTheDocument();

    const lastNameError = getByLabelText(/Last Name is Required/i);
    expect(lastNameError).toBeInTheDocument();

    const emailError = getByLabelText(/Email is Required/i);
    expect(emailError).toBeInTheDocument();

    const birthdayError = getByLabelText(/Enter a valid DOB/i);
    expect(birthdayError).toBeInTheDocument();

    const phoneNumberError = getByLabelText(/Enter Valid Phone Number/i);
    expect(phoneNumberError).toBeInTheDocument();

    const passwordError = getByLabelText(/Minimum 7 characters/i);
    expect(passwordError).toBeInTheDocument();

    const passwordConfirmError = getByLabelText(/Confirm Password Required/i);
    expect(passwordConfirmError).toBeInTheDocument();
  });
});
