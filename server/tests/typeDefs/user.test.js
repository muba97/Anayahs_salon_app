import { gql } from 'apollo-server-express';
import axios from 'axios';
import { User, Mutation, Query } from '../../src/typeDefs/user';

describe('User typeDefs Test', () => {
  test('should return correct data of all users', async () => {
    const response = await axios.post('http://localhost:4000/graphql', {
      query: `
      query {
        users {
          id
          firstName
          lastName
          email
          phoneNumber
        }
      }
      `,
    });

    const { data } = response;
    expect(data).toMatchObject({
      data: {
        users: [
          {
            id: '5eea48b4cc15f71ad0706d0d',
            firstName: 'Hector',
            lastName: 'Ram',
            email: 'differntEmail@gmail.com',
            phoneNumber: '123-123-1233',
          },
          {
            id: '5eea48bcd145cf1aeb1ecc24',
            firstName: 'Mubashir',
            lastName: 'Khan',
            email: 'muba@fsdf.com',
            phoneNumber: '832-222-2222',
          },
        ],
      },
    });
  });
});
