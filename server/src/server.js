import { ApolloServer, gql } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';

  const typeDefs = gql`
  type Query {
    hello: String!
  }
  `;

  const resolvers = {
    Query: {
      hello: () => 'hi'
    }
  };
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers
  });
  
  server.applyMiddleware({ app });
  
  mongoose.connect(process.env.MONGO_URI, { 
    useUnifiedTopology: true,
    useNewUrlParser: true
  });


  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
