import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import { USER_INFO } from '../../GQLqueries/user';
import ProfilePage from '../../Pages/ProfilePage';

const userId = '5f0b8d54dd147401c51afd9f';
const id = '1';

const USER_INFO_RESPONSE = {
  data: {
    user: {
      firstName: 'test',
      lastName: 'testing',
      email: 'test@gmail.com',
      birthDay: '10/12/2019',
      phoneNumber: '832-222-1111',
    },
  },
};

const mocks = {
  request: {
    query: USER_INFO,
    variables: { id },
  },
  result: USER_INFO_RESPONSE,
};

describe('<ProfilePage /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render final state', async () => {
    const { findByTestId } = render(
      <MockedProvider mocks={[mocks]} addTypename={false}>
        <ProfilePage id="1" />
      </MockedProvider>
    );

    const loadingState = await findByTestId('loading');
    expect(loadingState).toBeInTheDocument();

    const profilePage = await findByTestId('profilePage');
    expect(profilePage).toBeInTheDocument();
  });
});
