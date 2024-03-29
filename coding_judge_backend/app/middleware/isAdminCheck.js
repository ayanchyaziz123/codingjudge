const jwt = require('jsonwebtoken');
const User = require('../models/User');


const isAdminCheck = async (req, res, next) => {
    const { authorization } = req.headers;
    try {
        const token = authorization.split(' ')[1];
        const decode = jwt.verify(token, process.env.KEY);
        const { email, userId } = decode;
        req.email = email;
        req.userId = userId;
        const checkUser = await User.findById(req.userId);
        const flag = checkUser.isAdmin;
        if (!flag) {
            res.status(500).json({
                detail: "Admin Auth failed"
            });
        }
        else {
            next();
        }
    }
    catch (error) {
        next("authentication failed.. please log in again!");

    }
};

module.exports = isAdminCheck;
