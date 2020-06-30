import { app, server } from './server';

const { PORT } = process.env;

const serverPort = PORT || 5000;

app.listen({ port: serverPort }, () =>
  console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
);
