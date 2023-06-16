const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next)=> {
    err.statusCode = err.statusCode || 500;
    // 500 for server not found
    err.message = err.message || "Internal Server Error";

    res.status(err.statusCode).json({
        success: false,
        // error: err.stack,
        // error: err,
        message: err.message,
    });
};