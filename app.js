var express    = require('express');        // call express
var app        = express();                 // define our app using express
var bodyParser = require('body-parser');

// configure app to use bodyParser()
// this will let us get the data from a POST
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Set routes
var router = require('./app/router')(app);

var port = process.env.PORT || 9999;        // set our port

module.exports = app;

// START THE SERVER
app.listen(port);
console.log('Teamup server started on port ' + port);