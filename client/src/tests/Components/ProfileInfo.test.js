import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ProfileInfo from '../../Components/ProfileInfo';

describe('<ProfileInfo />', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render ProfileInfo', () => {
    const { getByTestId } = render(<ProfileInfo userInfo={{}} />);
    const profileInfo = getByTestId('profileInfo');
    expect(profileInfo).toBeInTheDocument();
  });

  test('Input good info in form fields ', async () => {
    const { getByTestId, getByLabelText } = render(<ProfileInfo userInfo={{}} />);
    const firstNameInput = getByLabelText('First Name');

    // await act(async () => {
    //   fireEvent.click(getByTestId('edit-submit'));
    // });

    await act(async () => {
      fireEvent.change(firstNameInput, { target: { id: 'firstName', value: 'John' } });
    });

    expect(firstNameInput.value).toBe('John');

    const lastNameInput = getByLabelText('Last Name');

    await act(async () => {
      fireEvent.change(lastNameInput, {
        target: { id: 'lastName', value: 'Doe' },
      });
    });

    expect(lastNameInput.value).toBe('Doe');

    const emailInput = getByLabelText('Email');

    await act(async () => {
      fireEvent.change(emailInput, {
        target: { id: 'email', value: 'example@gmail.com' },
      });
    });

    expect(emailInput.value).toBe('example@gmail.com');

    const birthDayInput = getByLabelText('Birthday');

    await act(async () => {
      fireEvent.change(birthDayInput, {
        target: { id: 'birthDay', value: '01/01/1980' },
      });
    });

    expect(birthDayInput.value).toBe('01/01/1980');

    const phoneNumberInput = getByLabelText('Phone Number');

    await act(async () => {
      fireEvent.change(phoneNumberInput, {
        target: { id: 'phoneNumber', value: '111-111-1111' },
      });
    });

    expect(phoneNumberInput.value).toBe('111-111-1111');

    // await act(async () => {
    //   fireEvent.click(getByTestId('loginButtonForm'));
    // });
  });
});
