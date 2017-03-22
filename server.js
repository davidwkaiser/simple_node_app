// grab express
var express = require('express');

// create an express app
var app = express();

//create an express route for the home page
//http://localhost:8080/
app.get('/', function(req, res){
  res.sendFile('index.html', { root: __dirname });
});

//Start the server on port 8080
app.listen(8080);
console.log('server has started');
