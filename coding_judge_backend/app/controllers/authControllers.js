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
      const existingUser = await User.findOne({ email: email });
      if (!existingUser) return res.status(400).json({ detail: "email does not exist" });
      // if (!existingUser.verified) return res.status(400).json({ detail: "email is not verified" });
      const isValidPassword = await bcrypt.compare(password, existingUser.password);
      if (!isValidPassword) return res.status(400).json({ detail: "password does not match" });


      const token = jwt.sign({
          email: existingUser.email,
          userId: existingUser._id
      }, process.env.KEY, {
          expiresIn: '1h'
      })
      const user_info = {
          username: existingUser.username,
          email: existingUser.email,
          isAdmin: existingUser.isAdmin,
          token: token
      }
      console.log("success")
      return res.status(200).json({
          "userInfo": user_info,
          "message": "logIn successfully"
      })
  }
  catch (error) {
      return res.status(400).json({
          detail: "Server error"
      });
  }
}

exports.logout = (req, res) => {
  // Implement logout logic
  req.logout();
  res.status(200).json({ message: 'Logout successful' });
};
