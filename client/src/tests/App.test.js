import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from '../App';

describe('<App /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('renders App', () => {
    const { getByTestId } = render(<App />);
    const app = getByTestId('app');

    expect(app).toBeInTheDocument();
  });
});
