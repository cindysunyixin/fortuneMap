'use strict';

const express = require('express');
const port = 3000;

// initialise application
const app = express();
const routes = require('./routes')(app);

// serve static assets
app.use(express.static(__dirname + '/public'));

// launch app to listen on designated port
app.listen(port, () => {
    console.log('Server listening on port ' + port);
});