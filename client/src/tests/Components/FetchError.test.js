import React from 'react';
import { render, cleanup } from '@testing-library/react';
import FetchError from '../../Components/FetchError';

const testError = {
  message: 'Test Error Message',
};

describe('<FetchError /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render componnet without crashing', () => {
    const { getByTestId } = render(<FetchError error={testError} />);

    const fetchError = getByTestId('fetchError');

    expect(fetchError).toBeInTheDocument();
  });

  test('should render with given error message as prop', () => {
    const { getByTestId, getByText } = render(<FetchError error={testError} />);

    const fetchError = getByTestId('fetchError');
    expect(fetchError).toBeInTheDocument();

    const errorMessage = getByText(`Error: ${testError.message}`);
    expect(errorMessage).toBeInTheDocument();
  });
});
