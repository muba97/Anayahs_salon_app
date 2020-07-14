import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import ProfileInfo from '../../Components/ProfileInfo';

const userInfo = {
  firstName: 'Bob',
  lastName: 'Builder',
  email: 'bob@email.com',
  birthDay: '01/01/1975',
  phoneNumber: '222-222-2222',
};

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
    const { getByTestId, getByLabelText } = render(<ProfileInfo userInfo={userInfo} />);

    await act(async () => {
      fireEvent.click(getByTestId('edit-submit'));
    });

    const firstNameInput = getByLabelText('First Name');
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

    await act(async () => {
      fireEvent.submit(getByTestId('edit-submit'));
    });
  });

  test('should go back to default values on cancel click event', async () => {
    const { getByTestId, getByLabelText } = render(<ProfileInfo userInfo={userInfo} />);

    await act(async () => {
      fireEvent.click(getByTestId('edit-submit'));
    });

    const firstNameInput = getByLabelText('First Name');
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

    await act(async () => {
      fireEvent.click(getByTestId('cancelButton'));
    });

    expect(firstNameInput.value).toBe('Bob');
    expect(lastNameInput.value).toBe('Builder');
  });

  test('Empty user input', async () => {
    const { getByTestId, getByLabelText, getByText } = render(
      <ProfileInfo userInfo={userInfo} />
    );

    await act(async () => {
      fireEvent.click(getByTestId('edit-submit'));
    });

    const firstNameInput = getByLabelText('First Name');
    await act(async () => {
      fireEvent.change(firstNameInput, { target: { id: 'firstName', value: '' } });
    });
    expect(firstNameInput.value).toBe('');

    const lastNameInput = getByLabelText('Last Name');
    await act(async () => {
      fireEvent.change(lastNameInput, {
        target: { id: 'lastName', value: '' },
      });
    });
    expect(lastNameInput.value).toBe('');

    const emailInput = getByLabelText('Email');
    await act(async () => {
      fireEvent.change(emailInput, {
        target: { id: 'email', value: '' },
      });
    });
    expect(emailInput.value).toBe('');

    const birthDayInput = getByLabelText('Birthday');
    await act(async () => {
      fireEvent.change(birthDayInput, {
        target: { id: 'birthDay', value: '' },
      });
    });
    expect(birthDayInput.value).toBe('');

    const phoneNumberInput = getByLabelText('Phone Number');
    await act(async () => {
      fireEvent.change(phoneNumberInput, {
        target: { id: 'phoneNumber', value: '' },
      });
    });
    expect(phoneNumberInput.value).toBe('');

    await act(async () => {
      fireEvent.submit(getByTestId('edit-submit'));
    });

    const firstNameError = getByText('First Name is Required');
    expect(firstNameError).toBeInTheDocument();

    const lastNameError = getByText('Last Name is Required');
    expect(lastNameError).toBeInTheDocument();

    const emailError = getByText('Email is Required');
    expect(emailError).toBeInTheDocument();

    const birthdayError = getByText('Date of Birth is required');
    expect(birthdayError).toBeInTheDocument();

    const phoneNumberError = getByText('Phone Number is required');
    expect(phoneNumberError).toBeInTheDocument();

    await act(async () => {
      fireEvent.submit(getByTestId('edit-submit'));
    });

    await act(async () => {
      fireEvent.click(getByTestId('cancelButton'));
    });
  });
});
