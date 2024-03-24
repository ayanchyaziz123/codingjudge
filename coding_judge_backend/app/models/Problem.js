const mongoose = require('mongoose');

// Define the schema for the Problem model
const problemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true
  },
  timeLimit: {
    type: Number,
    required: true // in milliseconds
  },
  memoryLimit:{
    type: Number,
    required: true // in MB
  },
  isPublic: {
    type: Boolean,
    default: false
  }
});

// Create the Problem model from the schema
const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
