import mongoose from 'mongoose';

export const disconnectDB = async () => {
  await mongoose.connection.dropDatabase();
  await mongoose.connection.close();
};

export const clearDB = async () => {
  const mongoCollections = mongoose.connection.collections;

  mongoCollections.forEach(async (key) => {
    const collection = mongoCollections[key];
    await collection.deleteMany({});
  });
};
