// controllers/tagController.js

const Tag = require('../models/Tag');

// Controller function to create a new tag
exports.createTag = async (req, res) => {
  try {
    const { name, description } = req.body;
    console.log("data : ", name, description)
    const tag = new Tag({ name, description });
    await tag.save();
    res.status(201).json(tag);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller function to list all tags
exports.listTags = async (req, res) => {
  try {
    const tags = await Tag.find();
    console.log("tags : ", tags)
    res.status(200).json(tags);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to delete a tag
exports.deleteTag = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedTag = await Tag.findByIdAndDelete(id);
    if (!deletedTag) {
      return res.status(404).json({ message: "Tag not found" });
    }
    res.status(200).json({ message: "Tag deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to get a tag by ID
exports.getTagById = async (req, res) => {
  const { id } = req.params;
  try {
    const tag = await Tag.findById(id);
    if (!tag) {
      return res.status(404).json({ message: "Tag not found" });
    }
    res.status(200).json(tag);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Controller function to edit a tag
exports.editTag = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    const updatedTag = await Tag.findByIdAndUpdate(id, { name, description }, { new: true });
    if (!updatedTag) {
      return res.status(404).json({ message: "Tag not found" });
    }
    res.status(200).json(updatedTag);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
