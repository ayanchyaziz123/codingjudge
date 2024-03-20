const mongoose = require('mongoose');

// Define the schema for the Tag model
const tagSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },
  description: {
    type: String,
    default: ''
  }
});

// Create the Tag model from the schema
const Tag = mongoose.model('Tag', tagSchema);

module.exports = Tag;
