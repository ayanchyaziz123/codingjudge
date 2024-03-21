// authController.js

const bcrypt = require('bcryptjs');
const User = require('../models/User');

const passport = require('passport');
const jwt = require('jsonwebtoken');

exports.googleLogin = passport.authenticate('google', { scope: ['profile', 'email'] });

exports.googleCallback = (req, res) => {
  // Generate JWT token with user information
  const token = jwt.sign({ user: req.user }, process.env.JWT_SECRET, { expiresIn: '1h' });
  res.redirect(`http://localhost:3000/login-success?token=${token}`);
};


exports.register = async (req, res) => {
  try {
    // Check if user already exists
    const {username, email, password}  = req.body
    console.log(username)
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
      email: email,
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
exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    console.log("Request Body:", req.body); // Log request body for debugging

    // Find the user in the database
    const existingUser = await User.findOne({ email: email });
    console.log("Existing User:", existingUser); // Log existing user for debugging

    // If user doesn't exist, return error
    if (!existingUser) {
      console.log("User not found");
      return res.status(400).json({ detail: "Email does not exist" });
    }

    // Verify password
    const isValidPassword = await bcrypt.compare(password, existingUser.password);
    if (!isValidPassword) {
      console.log("Invalid password");
      return res.status(400).json({ detail: "Password does not match" });
    }

    // Generate JWT token
    const token = jwt.sign({
      email: existingUser.email,
      userId: existingUser._id
    }, "Abcdef123", {
      expiresIn: '1h'
    });
    console.log("Token:", token); // Log generated token for debugging

    // Construct user info object
    const user_info = {
      username: existingUser.username,
      email: existingUser.email,
      isAdmin: existingUser.isAdmin,
      token: token
    };

    console.log("Login successful");
    return res.status(200).json({
      userInfo: user_info,
      message: "Login successful"
    });
  } catch (error) {
    console.error("Login error:", error); // Log any errors that occur
    return res.status(500).json({ detail: "Server error" });
  }
}


exports.logout = (req, res) => {
  // Implement logout logic
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
};
