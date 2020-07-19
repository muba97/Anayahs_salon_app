import React from 'react';
import { render, cleanup, fireEvent } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ChangePass from '../../Components/ChangePass';

describe('<ChangePass /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render without crashing ', () => {
    const { getByTestId } = render(<ChangePass />);

    const changePass = getByTestId('changePass');
    expect(changePass).toBeInTheDocument();
  });

  test('Input good info in form', async () => {
    const { getByTestId, getByLabelText } = render(<ChangePass />);

    await act(async () => {
      fireEvent.click(getByTestId('showButton'));
    });

    const oldPasswordInput = getByLabelText('Old Password *');
    await act(async () => {
      fireEvent.change(oldPasswordInput, {
        target: { id: 'oldPassword', value: 'P@ssw0rd' },
      });
    });
    expect(oldPasswordInput.value).toBe('P@ssw0rd');

    const newPasswordInput = getByLabelText('New Password *');
    await act(async () => {
      fireEvent.change(newPasswordInput, {
        target: { id: 'newPassword', value: 'P@ssw0rd12' },
      });
    });
    expect(newPasswordInput.value).toBe('P@ssw0rd12');

    const confirmPassInput = getByLabelText('Confirm Password *');
    await act(async () => {
      fireEvent.change(confirmPassInput, {
        target: { id: 'confirmPassword', value: 'P@ssw0rd12' },
      });
    });
    expect(confirmPassInput.value).toBe('P@ssw0rd12');

    await act(async () => {
      fireEvent.submit(getByTestId('submitButton'));
    });
  });

  test('render required errors for empty fields', async () => {
    const { getByTestId, getByText } = render(<ChangePass />);

    await act(async () => {
      fireEvent.click(getByTestId('showButton'));
    });

    await act(async () => {
      fireEvent.submit(getByTestId('submitButton'));
    });

    const oldPassError = getByText('Old Password is required');
    expect(oldPassError).toBeInTheDocument();

    const newPassError = getByText('New Password is required');
    expect(newPassError).toBeInTheDocument();

    const confirmPassError = getByText('Confirm Password is required');
    expect(confirmPassError).toBeInTheDocument();
  });

  test('Password not matching errors', async () => {
    const { getByTestId, getByLabelText, getByText } = render(<ChangePass />);

    await act(async () => {
      fireEvent.click(getByTestId('showButton'));
    });

    const oldPasswordInput = getByLabelText('Old Password *');
    await act(async () => {
      fireEvent.change(oldPasswordInput, {
        target: { id: 'oldPassword', value: 'P@ssw0rd' },
      });
    });
    expect(oldPasswordInput.value).toBe('P@ssw0rd');

    const newPasswordInput = getByLabelText('New Password *');
    await act(async () => {
      fireEvent.change(newPasswordInput, {
        target: { id: 'newPassword', value: 'P@ssw0rd12' },
      });
    });
    expect(newPasswordInput.value).toBe('P@ssw0rd12');

    const confirmPassInput = getByLabelText('Confirm Password *');
    await act(async () => {
      fireEvent.change(confirmPassInput, {
        target: { id: 'confirmPassword', value: 'P@ssw0rd1' },
      });
    });
    expect(confirmPassInput.value).toBe('P@ssw0rd1');

    await act(async () => {
      fireEvent.submit(getByTestId('submitButton'));
    });

    const confirmPassError = getByText('Passwords do not match');
    expect(confirmPassError).toBeInTheDocument();
  });
});
