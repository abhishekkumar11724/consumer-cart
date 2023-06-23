const ErrorHandler = require("../utils/errorhandler");

module.exports = (err, req, res, next) => {
  err.statusCode = err.statusCode || 500;
  // 500 for server not found
  err.message = err.message || "Internal Server Error";

  // Wrong MongoDB ID error
  if (err.name == "CastError") {
    const message = `Resource not found. Invalid: ${err.path}`;
    err = new ErrorHandler(message, 400);
    // 400 for resource not found
  }

  // Mongoose duplicate key error
  if (err.code === 11000) {
    const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
    err = new ErrorHandler(message, 400);
  }

  // Wrong JWT error
  if (err.name == "JsonWebTokenError") {
    const message = `Json Web Token is invalid, try again`;
    err = new ErrorHandler(message, 400);
    // 400 for resource not found
  }

  // JWT EXPIRE error
  if (err.name == "TokenExpiredError") {
    const message = `Json Web Token is Expired, try again`;
    err = new ErrorHandler(message, 400);
    // 400 for resource not found
  }

  res.status(err.statusCode).json({
    success: false,
    error: err.stack,
    // error: err,
    message: err.message,
  });
};
