// IMPORT DEPENDENCIES
const express = require('express');
const cors = require('cors');
const fetch = require('node-fetch')

// IMPORT JSON FILES
const music = require('./music.json');

// CREATE OUR APP OBJECT
const app = express();

// SET UP MIDDLEWARE
app.use(cors());

// HOME ROUTE FOR TESTING OUR APP
app.get("/", async (req, res) => {
    const response = await fetch("https://itunes.apple.com/search?term=flume")
    const data = await response.json()
    res.send(data)
});

// ROUTE FOR RETRIEVING MUSIC
app.get("/music", (req, res) => {
    // send music via JSON
    res.json(music)
});

// DECLARE VARIABLE FOR PORT
const PORT = process.env.PORT || 4000;

// TURN ON SERVER LISTENER
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`))