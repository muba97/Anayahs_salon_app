import mongoose from 'mongoose';
import { UserInputError } from 'apollo-server-express';
import User from '../models/user';

export default {
  Query: {
    users: (root, arg, context, info) => {
      return User.find({});
    },

    user: (root, { id }, arg, context, info) => {
      if (!mongoose.Types.ObjectId.isValid(id)) {
        throw new UserInputError(`${id} is not a valid user ID`);
      }
      return User.findById(id);
    },
  },
  Mutation: {
    signUp: (root, args, context, info) => {
      return User.create(args);
    },
  },
};
