import axios from 'axios';
import 'regenerator-runtime';
import dotenv from 'dotenv';

dotenv.config();

const { PORT } = process.env;

describe('User typeDefs Test', () => {
  // beforeAll(() => {
  //   return clearDB();
  // });

  test('users', async () => {
    const response = await axios.post(`http://localhost:${PORT}/graphql`, {
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
        users: [],
      },
    });
  });

  test('signUp mutation: successful attempt', async () => {
    const response = await axios.post(`http://localhost:${PORT}/graphql`, {
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
  test('signUp mutation: failed attempt with duplicate email', async () => {
    const response = await axios.post(`http://localhost:${PORT}/graphql`, {
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
        signUp: null,
      },
    });
  });
});
