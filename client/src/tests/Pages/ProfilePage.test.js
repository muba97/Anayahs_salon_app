import React from 'react';
import { gql } from '@apollo/client';
import { render, cleanup } from '@testing-library/react';
import { MockedProvider } from '@apollo/client/testing';
import ProfilePage from '../../Pages/ProfilePage';

const USER_INFO = gql`
  query getUser($userId: String) {
    user(id: $userId) {
      firstName
      lastName
      email
      birthDay
      phoneNumber
    }
  }
`;

const mocks = [
  {
    request: {
      query: USER_INFO,
      variables: {
        id: '1',
      },
    },
    result: {
      data: {
        user: {
          firstName: 'John',
          lastName: 'Doe',
          email: 'email@email.com',
          birthDay: '01/01/1989',
          phoneNumber: '111-111-1111',
        },
      },
    },
  },
];

describe('<ProfilePage /> Tests', () => {
  afterEach(() => {
    cleanup();
  });

  test('should render loading state of component', () => {
    const { getByTestId } = render(
      <MockedProvider mocks={[]} addTypename={false}>
        <ProfilePage />
      </MockedProvider>
    );

    const loadingState = getByTestId('loading');

    expect(loadingState).toBeInTheDocument();
  });

  // test('should render final state of component', async () => {
  //   const { getByTestId } = render(
  //     <MockedProvider mocks={mocks} addTypename={false}>
  //       <ProfilePage />
  //     </MockedProvider>
  //   );

  //   const loadingState = getByTestId('loading');
  //   expect(loadingState).toBeInTheDocument();

  //   const profilePage = await getByTestId('profilePage');
  //   expect(profilePage).toBeInTheDocument();
  // });
});
