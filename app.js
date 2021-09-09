// Michael Clautice, Richmond, VA
// The Net Ninja - NodeJS Tutorial for Beginners
// Lesson 29 - Query Strings
//-----------
// WHAT THIS APP DOES------

/* https://youtu.be/xxxxxxxxx

xxxxxxxxxxxxxxxxxxxxxx

xxxxxxxxxxxxxxxxxxxxx */

// require the installed express pkg
const express = require('express');

// create an express app called app
const app = express();

// express app's set() mthd will set EJS as the template-view engine
app.set('view engine', 'ejs');

//express's app.use( ) mthd will access express's built-in middleware for static files
app.use('/assets', express.static('stuff'));

// express HTTP GET request handler that responds to a client GET req for the home pg route
// this is a static client req for the home pg
app.get('/', function (req, res) {
    res.render('index.ejs');
});

// express HTTP GET request handler that responds to a client GET req for the contact pg route
// this is a static client req for the contact pg
app.get('/contact', function (req, res) {
    console.log(req.query);
    res.render('contact.ejs', { qs: req.query });
});

// express HTTP GET request handler that responds to a client GET req for the profile pg route
// this is a DYNAMIC client req for the contact pg and a dynamic name
app.get('/profile/:name', function (req, res) {
    // create some data for demo purposes
    var data = { age: 29, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing', 'yoyoing', 'biking', 'dancing', 'sleeping', 'kite-flying'] };
    res.render('profile.ejs', { person: req.params.name, moreData: data });
});

// express app's listen() mthd will listen for port 3000
app.listen(3000);

// con.log a test mssg
global.console.log('\n"Hey, simmer down!! The server is trying to listening for Port 3000!"\n');