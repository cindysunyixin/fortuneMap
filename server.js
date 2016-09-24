'use strict';

const express = require('express');
const port = 3000;

// initialise application
const app = express();

// serve static assets
app.use(express.static(__dirname + '/public'));

// render index page as default home page
app.get('*', function (req, res) {
    res.sendFile(__dirname + '/views/index.html');
});

// launch app to listen on designated port
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});