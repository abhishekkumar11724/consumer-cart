const express = require("express");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
const dotenv = require("dotenv");

const path = require("path");

const app = express();

const errorMiddleware = require("./middleware/error");

//config
dotenv.config({ path: "backend/config/config.env" });

const bodyParser = require("body-parser");

// bodyParser = {
//   json: { limit: "50mb", extended: true },
//   urlencoded: { limit: "50mb", extended: true },
// };

//   app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json({ limit: "50mb" }));

app.use(bodyParser.json({ limit: "10mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));

app.use(express.json());
app.use(cookieParser());

app.use(fileUpload());

// Route Imports
const product = require("./routes/productRoute");
const user = require("./routes/userRoute");
const order = require("./routes/orderRoutes");
const payment = require("./routes/paymentRoutes");

app.use("/api/v1", product);
app.use("/api/v1", user);
app.use("/api/v1", order);
app.use("/api/v1", payment);

app.use(express.static(path.join(__dirname, "../frontend/build")));

app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "../frontend/build/index.html"));
});

// Middleware for Errors
app.use(errorMiddleware);

module.exports = app;
