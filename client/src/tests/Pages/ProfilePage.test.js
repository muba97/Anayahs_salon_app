import React from 'react';
import { render, cleanup } from '@testing-library/react';
import ProfilePage from '../../Pages/ProfilePage';

describe('<ProfilePage /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render Navbar Component without crashing', () => {
    const { getByTestId } = render(<ProfilePage />);

    const profilePage = getByTestId('profilePage');

    expect(profilePage).toBeInTheDocument();
  });
});
