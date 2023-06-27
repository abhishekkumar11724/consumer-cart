const express = require("express");
const cookieParser = require("cookie-parser");

const app = express();

const errorMiddleware = require("./middleware/error");

const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({ extended: false }));
app.use(bodyparser.json());

app.use(express.json());
app.use(cookieParser());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoutes");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
