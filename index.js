const express = require("express");
const app = express();
const mongoose = require('mongoose');

app.use(express.json());
app.use(express.static('public'));
app.use('/images', express.static('images'));
app.use(express.static('public'));
app.use('/audios', express.static('audios'));


require('dotenv').config();

const mongoString = process.env.MUSIC_DB_URI

mongoose.connect(mongoString);
const database = mongoose.connection
database.on('error', (error) => {
    console.log(error)
})

database.once('connected', () => {
    console.log('Database Connected');
})


app.listen(3000, () => {
  console.log(`Server Started at ${3000}`);
});

const route = require('./routes/route');
app.use('/api', route)

const route2 = require('./routes/audios');
app.use('/audios', route2)

 