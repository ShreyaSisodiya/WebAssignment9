
const express = require('express');
const app = express();

const cors = require('cors');
const mongoose = require('mongoose')

const mainRoute = require('./routes/MainRoute');

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/assignment8?readPreference=primary&appname=MongoDB%20Compass%20Community&ssl=false');

app.use(mainRoute);

app.listen(8000, () => {
    console.log("Server started at port 8000");
})