import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Loading from '../../Components/Loading';

describe('<Loading /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render loading page', () => {
    const { getByTestId } = render(<Loading />);
    const loading = getByTestId('loading');

    expect(loading).toBeInTheDocument();
  });
});
