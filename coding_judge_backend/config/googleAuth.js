const GoogleStrategy = require('passport-google-oauth20').Strategy;

const GOOGLE_CLIENT_ID = '957777544743-jspnbil87g0imskku9d3u2jjl6it835i.apps.googleusercontent.com';
const GOOGLE_CLIENT_SECRET = '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';
const CALLBACK_URL = 'http://localhost:8000/auth/google/callback'; // This should match the redirect URI you provided when setting up your Google OAuth credentials

const strategy = new GoogleStrategy(
  {
    clientID: GOOGLE_CLIENT_ID,
    clientSecret: GOOGLE_CLIENT_SECRET,
    callbackURL: CALLBACK_URL,
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

