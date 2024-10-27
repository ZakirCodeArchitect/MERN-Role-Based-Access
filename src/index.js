const express = require('express');
const dbConnect = require('./config/dbConnect');
const dotenv = require('dotenv').config();

// DataBase
dbConnect();

// Express Server
const app = express();

// Middleware
app.use(express.json());

// Routes


const PORT = process.env.PORT || 3001;

// Server
app.listen(PORT, () => {
    console.log(`Server Started on PORT : ${PORT}`)
})