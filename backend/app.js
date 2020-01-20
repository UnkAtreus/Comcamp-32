var express = require('express');

var app = express();

var port = process.env.PORT || 5000;
var mongoose = require('mongoose');
var passport = require('passport');

const cookieSession = require('cookie-session')
const session = require('express-session')

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));


/***************Mongodb configuratrion********************/
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
//configuration ===============================================================
mongoose.connect(configDB.url, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log("Connect Database")
}); // connect to our database


require('./app/passport')(passport); // pass passport for configuration



//session required for passport
app.use(session({ 
    secret: 'WeLoveComcamp32EiEi',
    resave: true,
    saveUninitialized: true,
    maxAge: 30 * 60 * 1000
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


//launch ======================================================================
app.listen(port);
console.log('The magic happens on port ' + port);

exports = module.exports = app;