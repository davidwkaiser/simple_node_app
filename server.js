// grab express
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.get('/', function(req, res){
  console.log("get!")
  res.render('pages/index.ejs');
});


//create an express route for the home page
//http://localhost:8080/
// app.get('/', function(req, res){
//   res.sendFile('index.html', { root: __dirname });
// });




//Start the server on port 8080
app.listen(8080, function () {
  console.log("express has started on port 8080");
});
// console.log('server has started');
