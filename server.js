// grab express
var express = require('express');
var app = express();
var ig = require('instagram-node').instagram();
ig.use({
  access_token: MY_ACCESS_TOKEN
})

app.use(express.static(__dirname + '/public'));
app.set('view engine', 'ejs');
app.get('/', function(req, res){
  console.log("get!")
  res.render('pages/index.ejs');
});


//Start the server on port 8080
app.listen(8080, function () {
  console.log("express has started on port 8080");
});
