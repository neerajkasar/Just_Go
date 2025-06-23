const express = require('express');
const dotenv = require('dotenv');
dotenv.config();
const cors = require('cors');
const app = express();
const connectToDb = require('./db/db');
const userRoutes = require('./route/user.route');

connectToDb();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/',(req,res) => {
    res.send('Hello Develper');
})

app.use('/users',userRoutes);

module.exports = app;