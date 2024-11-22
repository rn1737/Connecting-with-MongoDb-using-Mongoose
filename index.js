const express = require('express');
const app = express();
const connectDB = require('./db');
const users = require('./routes/users')
const dotenv = require('dotenv')

//load
dotenv.config();

const PORT = process.env.PORT;

//body parser
app.use(express.json());
//connect to database
connectDB();

app.use('/api', users);

/// -> /api/users

app.get('/', (req,res) => {
    console.log("I am inside home page route handler");
    res.send("Hello Jee, Welcome to CodeHelp");
})

app.listen(PORT, ()=> {
    console.log("Server is Up")
})