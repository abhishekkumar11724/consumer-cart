// import app from "app";
const app = require('./app');
const connectDatabase = require('./config/database');

// import 'dotenv';
const dotenv = require("dotenv");

//config 
dotenv.config({path:"backend/config/config.env"});

// connecting to database
connectDatabase();







app.listen(process.env.PORT, ()=> {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})
