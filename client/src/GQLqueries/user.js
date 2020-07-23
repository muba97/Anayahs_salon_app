import { gql } from '@apollo/client';

// eslint-disable-next-line import/prefer-default-export
export const USER_INFO = gql`
  query getUser($id: ID!) {
    user(id: $id) {
      firstName
      lastName
      email
      birthDay
      phoneNumber
    }
  }
`;
