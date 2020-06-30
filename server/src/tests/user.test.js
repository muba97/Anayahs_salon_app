import 'regenerator-runtime';
import supertest from 'supertest';
import { app } from '../server';
import { disconnectDB, clearDB } from '../db-utils';

const request = supertest(app);

describe('User typeDefs Test', () => {
  afterAll(async () => {
    await clearDB();
    await disconnectDB();
  });

  test('users', async () => {
    request
      .post('/graphql')
      .send({
        query: `{
      users {
        id
        firstName
        lastName
        email
        phoneNumber
      }
    }`,
      })
      .set('Accept', 'application/json')
      .expect('Content-Type', 'text/html; charset=utf-8')
      .end((err, res) => {
        if (err) {
          throw new Error(err);
        }
        //console.log('Response: ', res.body);
        expect(res.body).toBeInstanceOf(Object);
        expect(res.body).toEqual({});
      });
  });

  // test('signUp mutation: successful attempt', async () => {
  //   const response = await axios.post(`http://localhost:${PORT}/graphql`, {
  //     query: `
  //     mutation {
  //       signUp(firstName:"Mubashir", lastName:"Khan", email:"muba@gmail.com", birthDay: "10/12/2020", phoneNumber: "832-222-2222", password:"hello"){
  //         id
  //         firstName
  //         lastName
  //         email
  //         birthDay
  //         phoneNumber
  //         password
  //       }
  //     }
  //     `,
  //   });
  //   const { data } = response;
  //   expect(data).toMatchObject({
  //     data: {
  //       signUp: {
  //         firstName: 'Mubashir',
  //         lastName: 'Khan',
  //         email: 'muba@gmail.com',
  //         birthDay: '10/12/2020',
  //         phoneNumber: '832-222-2222',
  //         password: 'hello',
  //       },
  //     },
  //   });
  // });
  // test('signUp mutation: failed attempt with duplicate email', async () => {
  //   const response = await axios.post(`http://localhost:${PORT}/graphql`, {
  //     query: `
  //     mutation {
  //       signUp(firstName:"Mubashir", lastName:"Khan", email:"muba@gmail.com", birthDay: "10/12/2020", phoneNumber: "832-222-2222", password:"hello"){
  //         id
  //         firstName
  //         lastName
  //         email
  //         birthDay
  //         phoneNumber
  //         password
  //       }
  //     }
  //     `,
  //   });
  //   const { data } = response;
  //   expect(data).toMatchObject({
  //     data: {
  //       signUp: null,
  //     },
  //   });
  // });
});
