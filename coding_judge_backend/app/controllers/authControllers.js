// authController.js

const bcrypt = require('bcryptjs');
const User = require('../models/User');

exports.register = async (req, res) => {
  try {
    console.log("Registedred")
    return
    // Check if user already exists
    const existingUser = await User.findOne({ username: req.body.username });
    if (existingUser) {
      return res.status(400).json({ message: 'User already exists' });
    }

    // Hash the password
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    // Create a new user
    const newUser = new User({
      username: req.body.username,
      password: hashedPassword,
      // Add other user properties if needed
    });

    // Save the user to the database
    await newUser.save();

    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};

exports.login = (req, res, next) => {
  // Implement login logic using Passport.js authentication middleware
  // Example: passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login' })(req, res, next);
};

exports.logout = (req, res) => {
  // Implement logout logic
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
};
