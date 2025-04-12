const dotenv = require('dotenv');
const express = require('express');
const connectDB = require('./db');
const userRoutes = require('./routes/userRoutes.js');


// initialize express app
dotenv.config()
const app = express()
app.use(express.json())


// connect to Database
connectDB()

// import routes
app.use("/user", userRoutes)


app.listen(process.env.PORT, () => {
    console.log(`---------------------------------------\n:>> Date:${new Date().toLocaleString('en')}\n:>> Server is running on port ${process.env.PORT}\n`);
});

