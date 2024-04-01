// routes/tagRoutes.js

const express = require('express');
const router = express.Router();
const tagController = require('../controllers/tagControllers');
const isAdminCheck = require('../middleware/isAdminCheck');

// Route to create a new tag
router.post('/create', tagController.createTag);

// Route to list all tags
router.get('/get_all', tagController.listTags);

// Route to delete a tag
router.delete('/delete/:id', tagController.deleteTag);

// Route to get a tag by ID
router.get('/get/:id', tagController.getTagById);

// Route to edit a tag
router.put('/edit/:id', isAdminCheck, tagController.editTag);

module.exports = router;
