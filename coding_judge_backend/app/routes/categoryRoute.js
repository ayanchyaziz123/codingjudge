// routes/categoryRoutes.js

const express = require('express');
const router = express.Router();
const categoryController = require('../controllers/categoryControllers');

// Route to create a new category
router.post('/create', categoryController.createCategory);

// Route to list all categories
router.get('/categories', categoryController.listCategories);

module.exports = router;