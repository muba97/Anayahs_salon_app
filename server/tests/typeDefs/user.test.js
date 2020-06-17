import axios from 'axios';
import 'regenerator-runtime';

describe('User typeDefs Test', () => {
  test('users', async () => {
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
          {
            id: '5eeaab34560a1080adf18f4f',
            firstName: 'Mubashir',
            lastName: 'Khan',
            email: 'muba@email.com',
            phoneNumber: '832-222-2222',
          },
        ],
      },
    });
  });

  test('mutations', async () => {
    const response = await axios.post('http://localhost:4000/graphql', {
      query: `
      mutation {
        signUp(firstName:"Mubashir", lastName:"Khan", email:"muba@gmail.com", birthDay: "10/12/2020", phoneNumber: "832-222-2222", password:"hello"){
          id
          firstName
          lastName
          email
          birthDay
          phoneNumber
          password
        }
      }
      `,
    });
    const { data } = response;
    expect(data).toMatchObject({
      data: {
        signUp: {
          firstName: 'Mubashir',
          lastName: 'Khan',
          email: 'muba@gmail.com',
          birthDay: '10/12/2020',
          phoneNumber: '832-222-2222',
          password: 'hello',
        },
      },
    });
  });
});
