import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    maxlength: 25,
  },
  lastName: {
    type: String,
    required: true,
    maxlength: 25,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  birthDay: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

const User = mongoose.model('User', userSchema);

export default User;
