const express = require('express');
const cors = require('cors');
const passport = require('passport');
const session = require('express-session')

// Allow requests from all origins

const mongoose = require('mongoose');

const randomSecret = require('crypto').randomBytes(64).toString('hex');

const app = express();



app.use(cors());
const connectDatabase = require('./config/connectionDB');
const authRoutes = require('./app/routes/authRoutes'); // Import authentication routes

// Get the connection URI from your environment variables or configuration file
const uri = process.env.MONGODB_URI; // Or your MongoDB connection URI

connectDatabase()

// Other middleware and routes
app.use(express.json()); // Middleware to parse JSON requests
app.use('/auth', authRoutes); // Use authentication routes with base URL '/auth'

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
