// routes/categoryRoutes.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryControllers');

// Route to create a new category
router.post('/create', categoryController.createCategory);

// Route to list all categories
router.get('/categories', categoryController.listCategories);

// Route to delete a category
router.delete('/delete/:id', categoryController.deleteCategory);

// Route to get a category by ID
router.get('/:id', categoryController.getCategoryById);

// Route to edit a category
router.put('/edit/:id', categoryController.editCategory);

module.exports = router;
