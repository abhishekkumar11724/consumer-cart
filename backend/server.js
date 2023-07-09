// import app from "app";
// const app = require("./app.js");

const cloudinary = require("cloudinary");
const connectDatabase = require("./config/database.js");

// import 'dotenv';
const dotenv = require("dotenv");

const express = require("express");
const cookieParser = require("cookie-parser");
const fileUpload = require("express-fileupload");
// const dotenv = require("dotenv");

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

//////////////////////////////////////////////////////

// Handling Uncaught Exception
process.on("uncaughtException", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(`Shutting down the server due to Uncaught Exception`);
  process.exit(1);
});

//config
dotenv.config({ path: "backend/config/config.env" });

// connecting to database
connectDatabase();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const server = app.listen(process.env.PORT, () => {
  console.log(`server is working on http://localhost:${process.env.PORT}`);
});

// Unhandled Promise Rejection
process.on("unhandledRejection", (err) => {
  console.log(`Error: ${err.message}`);
  console.log(
    `Shutting down the server due to Unhandled Promise Rejection Error`
  );

  server.close(() => {
    process.exit(1);
  });
});
