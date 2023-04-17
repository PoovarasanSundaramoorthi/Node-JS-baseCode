import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'Please fill your name'],
  },
  email: {
    type: String,
    required: [true, 'Please fill your email'],
    unique: true,
    lowercase: true,
  },
  address: {
    type: String,
    trim: true,
  },
  password: {
    type: String,
    required: [true, 'Please fill your password'],
    // minLength: 6,
  },
  passwordConfirm: {
    type: String,
    required: [true, 'Please fill your password confirm'],
  },
  role: {
    type: String,
    enum: ['admin', 'borrower'],
    default: 'borrower',
  },
  active: {
    type: Boolean,
    default: true,
  },
});

User.set('timestamps', true);
User.method('toJSON', function () {
  const { __v, _id, ...object } = this.toObject();
  object.id = _id;
  return object;
});

User.set('autoIndex', true);

const User = mongoose.model('User', userSchema);
module.exports = User;
