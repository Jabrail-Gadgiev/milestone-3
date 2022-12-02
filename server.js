const express = require('express');
const server = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
require('dotenv').config();

// Configure middleware for express
server.use(bodyParser.urlencoded({extended: false}));
server.use(bodyParser.json());

const dbURL = process.env.DB_URL;

const dbConfig = {
    'useNewUrlParser': true,
    'useUnifiedTopology': true,
};

mongoose
.connect(dbURL, dbConfig)
.then(function() {
    console.log('DB is connected');
})
.catch(function(connectionError) {
    console.log('DB connection error', connectionError);
});

server.get('/',
    function(req, res) {
        res.send('Hello World')
    }
);

server.listen(
    process.env.PORT, 
    function() {
        console.log('Running on http://localhost:3002/')
    }
);