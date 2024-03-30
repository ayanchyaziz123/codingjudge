const jwt = require('jsonwebtoken');
const User = require('../models/User');

const isAdminCheck = async (req, res, next) => {
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

        if (user.priority == 1 || user.priority == 2) {
            // User is not an admin, proceed to the next middleware
            next();
        } else {
            // User is an admin, return a 403 status with an error message
            res.status(403).json({
                detail: "Admin authentication failed"
            });
        }
    } catch (error) {
        // Handle token-related errors and other exceptions
        console.error(error);
        res.status(401).json({
            detail: error.message || "Authentication failed"
        });
    }
};

module.exports = isAdminCheck;
