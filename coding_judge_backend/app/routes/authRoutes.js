// authRoutes.js

const express = require('express');
const router = express.Router();
const authController = require('../controllers/authControllers');

// Register Route
router.post('/register', authController.register);

// Login Route
router.post('/login', authController.login);

// Logout Route
router.get('/logout', authController.logout);

module.exports = router;
