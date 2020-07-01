import { connections, mongoCollections } from './server';

export const disconnectDB = async () => {
  await connections
    .dropDatabase()
    .then(console.log('Dropped DB'))
    .catch((err) => console.log(err));
  await connections.close();
};

export const clearDB = async () => {
  console.log('collection: ', mongoCollections);

  Object.keys(mongoCollections).forEach(async (key) => {
    const collection = mongoCollections[key];
    await collection.deleteMany({});
  });
};
