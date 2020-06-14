import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    user(id: ID!): User
    users: [User!]!
  }

  extend type Mutation {
    signUp(
      firstName: String!
      lastName: String!
      email: String!
      birthDay: String!
      phoneNumber: String!
    ): User
  }

  type User {
    id: ID!
    firstName: String!
    lastName: String!
    email: String!
    birthDay: String!
    phoneNumber: String!
  }
`;
