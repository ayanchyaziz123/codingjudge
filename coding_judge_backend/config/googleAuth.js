const GoogleStrategy = require('passport-google-oauth20').Strategy;


const strategy = new GoogleStrategy(
  {
    clientID: process.env.clientID,
    clientSecret: process.env.clientSecret,
    callbackURL: process.env.callbackURL,
  },
  (accessToken, refreshToken, profile, done) => {
    // Handle authentication logic
    // This function will be called when a user is authenticated successfully
    // accessToken is the token that allows access to the Google API on behalf of the user
    // refreshToken is used to obtain a new accessToken when the current one expires
    // profile contains user profile information
    // done is a callback function to be called when authentication is complete
  }
);

module.exports = strategy;

