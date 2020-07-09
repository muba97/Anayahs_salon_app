import { gql } from 'apollo-server-express';

export default gql`
  type Query {
    user(id: ID!): User
    users: [User!]!
  }

  type Mutation {
    signUp(
      firstName: String!
      lastName: String!
      email: String!
      birthDay: String!
      phoneNumber: String!
      password: String!
    ): User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    birthDay: String!
    phoneNumber: String!
    password: String!
  }
`;
