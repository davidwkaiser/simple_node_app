// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
const NeoInstagram = require('neo-instagram');
var express = require('express');
var app     = express();
var ig = new NeoInstagram({});

var my_access_token = process.env.TOKEN

// MY_ACCESS_TOKEN = ENV['TOKEN']

// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');


// using neo-instagram
app.get('/', function(req, res) {
    ig.get('users/self/media/recent', { access_token: my_access_token, count: 5 }).then(media => {
          res.render('pages/index', { grams: media.data })
    }).catch(console.error)
});

// START THE SERVER
// ==================================================
app.listen(8080);
console.log('App started! Look at http://localhost:8080');

// look here for libs: https://www.npmjs.com/browse/keyword/instagram

