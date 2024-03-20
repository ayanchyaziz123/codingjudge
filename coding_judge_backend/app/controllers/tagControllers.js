const Tag = require('../models/Tag');

// Controller function to create a new tag
exports.createTag = async (req, res) => {
  try {
    const tag = new Tag(req.body);
    await tag.save();
    res.status(201).json({ success: true, tag });
  } catch (error) {
    res.status(400).json({ success: false, error: error.message });
  }
};

// Controller function to get all tags
exports.getAllTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    res.json({ success: true, tags });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};
