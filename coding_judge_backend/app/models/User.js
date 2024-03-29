// User.js

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  firstName: {
    type: String,
  
  },
  lastName: {
    type: String,

  },
  username: {
    type: String,
    required: true,
    unique: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  dob: {
    type: Date,

  },
  country: {
    type: String,

  },
  priority: {
    type: Number,
    default: 1 // Defaults to 1
  },
  isVerified: {
    type: Boolean,
    default: false // Defaults to false
  }
});

const User = mongoose.model('User', userSchema);

module.exports = User;
