// GRAB THE PACKAGES/VARIABLES WE NEED
// ==================================================
const NeoInstagram = require('neo-instagram');
var express = require('express');
var app     = express();
// var ig      = require('instagram-node').instagram();
var ig = new NeoInstagram({});


// CONFIGURE THE APP
// ==================================================
// tell node where to look for site resources
app.use(express.static(__dirname + '/public'));

// set the view engine to ejs
app.set('view engine', 'ejs');


// configure instagram app with client_id, client_secret, and access_token
// ig.use({
//   // get access token here: http://instagram.pixelunion.net/
//   access_token: "MY_ACCESS_TOKEN"
// });

// alternatively we can use the client_id and client_secret
// for now we'll use the access_token way
// ig.use({
//   // get these from when we create our app as an instagram developer
//   // https://www.instagram.com/developer/,
//   client_id: 'MY_CLIENT_ID',
//   client_secret: 'MY_CLIENT_SECRET'
// });
// not sure why but IG call is not working
// even though the access token is tested positive
// perhaps test with twitter or other API
// also may be a version thing, look at instagram-node and express


// SET THE ROUTES
// ===================================================
// home page route - popular images
// using instagram-node
// app.get('/', function(req, res) {
//   // console.log(req);
//     // use the instagram package to get popular media
//         ig.user_self_feed(function(err, medias, pagination, remaining, limit) {
//         // render the home page and pass in the popular images
//         console.log(err);
//         res.render('pages/index', { grams: medias });
//     });
// });
// using neo-instagram
app.get('/', function(req, res) {
    ig.get('users/self/media/recent', { access_token: MY_ACCESS_TOKEN, count: 5 }).then(media => {
        console.log(media.data);
          res.render('pages/index', { grams: media.data })
    }).catch(console.error)
});


// START THE SERVER
// ==================================================
app.listen(8080);
console.log('App started! Look at http://localhost:8080');

// look here for libs: https://www.npmjs.com/browse/keyword/instagram

