import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: {
    first: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 25,
    },
    last: {
      type: String,
      required: true,
      trim: true,
      minlength: 2,
      maxlength: 25,
    },
  },
  dob: {
    type: Date,
    required: true,
  },
  gender: {
    type: String,
    required: true,
    enum:['male', 'female', 'other'],
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    unique: true,
    match: [/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/, 'Please fill a valid email address']
  },
  password: {
    type: String,
    trim: true,
    required: true,
  },
  role: {
    type: String,
    enum: ['user', 'admin', 'moderator'],
    default: 'user',
  },
  mobile: {
    type: String,
    default: '',
  },
  accountConfirmation: {
    type: Boolean,
    default: false,
  },
}, {
  timestamps: true
});

const User = mongoose.model("User", userSchema);

export default User;