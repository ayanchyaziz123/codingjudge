const jwt = require('jsonwebtoken');

const loginCheck = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        if (!authorization || !authorization.startsWith('Bearer ')) {
            return res.status(401).json({ error: 'Unauthorized' });
        }

        const token = authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.KEY);
        const { email } = decode;
        req.email = email;
        next();
    } catch (error) {
        return res.status(401).json({ tokenNotValid: true, detail: 'Authentication failed. Please log in again!' });
    }
};

module.exports = loginCheck;
