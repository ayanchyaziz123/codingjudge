const mongoose = require('mongoose');

// Define the schema for the Problem model
const problemSchema = new mongoose.Schema({
  title: {
    bangla: {
      type: String,
      required: true
    },
    english: {
      type: String,
      required: true
    }
  },
  description: {
    bangla: {
      type: String,
      required: true
    },
    english: {
      type: String,
      required: true
    }
  },
  tags: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Tag'
  }],
  difficulty: {
    type: String,
    enum: ['easy', 'medium', 'hard'],
    required: true
  },
  isPublic: {
    type: Boolean,
    default: false
  }
});

// Create the Problem model from the schema
const Problem = mongoose.model('Problem', problemSchema);

module.exports = Problem;
