import app from "./app";

import 'dotenv';

//config 
dotenv.config({path:"backend/config/config.env"});

app.listen(process.env.PORT, ()=> {
    console.log(`server is working on http://localhost:${process.env.PORT}`)
})
