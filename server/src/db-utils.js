import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const { MONGO_DB, MONGO_USER, MONGO_PASS, MONGO_CLUSTER } = process.env;

export const connectDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@${MONGO_CLUSTER}/${MONGO_DB}?retryWrites=true&w=majority`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    )
    .then(() => console.log('Mongodb connected'))
    .catch((err) => console.log(err));
};

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
