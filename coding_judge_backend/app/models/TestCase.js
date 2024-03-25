const mongoose = require('mongoose');

const testCaseSchema = new mongoose.Schema({
  problemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Problem',
    required: true
  },
  title: {
    type: String,
    required: true
  },
  input: {
    type: String,
    required: true
  },
  output: {
    type: String,
    required: true
  }
});

const TestCase = mongoose.model('TestCase', testCaseSchema);

module.exports = TestCase;
