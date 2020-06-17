import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import typeDefs from './typeDefs';
import resolvers from './resolvers';

dotenv.config();

const { PORT, NODE_ENV, MONGO_DB } = process.env;

const startServer = async () => {
  const IN_PROD = NODE_ENV === 'production';
  const app = express();

  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: !IN_PROD,
  });

  server.applyMiddleware({ app });

  console.log('MONGO_DB', MONGO_DB);

  mongoose
    .connect(
      `mongodb+srv://anyahssalon:Khan11@salonapp-lgmgb.mongodb.net/${MONGO_DB}?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    )
    .then(() => console.log('Mongodb connected'))
    .catch((err) => console.log(err));

  app.listen({ port: PORT }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
};

startServer();
