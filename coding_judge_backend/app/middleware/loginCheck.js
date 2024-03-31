const jwt = require('jsonwebtoken');
const User = require('../models/User');

const loginCheck = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization || !authorization.startsWith('Bearer ')) {
            throw new Error('Authentication token missing');
        }
        
        const token = authorization.split(' ')[1];
        const decode = jwt.verify(token, "Abcdef123");
        const { email } = decode;
        req.email = email;
        
        const user = await User.findOne({ email: req.email });
        if (!user) {
            throw new Error('User not found');
        }

        // If the user exists and is authenticated, proceed to the next middleware
        next();
    } catch (error) {
        // Handle token-related errors and other exceptions
        console.error(error);
        res.status(401).json({
            detail: error.message || "Authentication failed"
        });
    }
};

module.exports = loginCheck;
