// controllers/categoryController.js

const Category = require('../models/Category');

// Controller function to create a new category
exports.createCategory = async (req, res) => {
  try {
    const { name, description } = req.body;
    console.log("data : ", name, description)
    const category = new Category({ name, description });
    await category.save();
    res.status(201).json(category);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Controller function to list all categories
exports.listCategories = async (req, res) => {
  try {
    const categories = await Category.find();
    console.log("category : ", categories)
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

