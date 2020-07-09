/* eslint-disable import/prefer-default-export */
import { connections } from './server';

export const disconnectDB = async (collectionName) => {
  await connections
    .dropCollection(collectionName)
    .then(console.log(`Dropped collection: ${collectionName}`))
    .catch((err) => console.log(err));
  await connections.close();
};
