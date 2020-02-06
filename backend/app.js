var express = require('express');
const https = require('https')
const path = require('path')
const fs = require('fs')

var app = express();

// var port = process.env.PORT || 5000;
var port = 5000;
var mongoose = require('mongoose');
var passport = require('passport');

const session = require('express-session')
const redis = require('redis')

let RedisStore = require('connect-redis')(session)
let redisClient = redis.createClient({
    host: 'redis',
    // host: 'localhost',
    connect_timeout: 3600000,
    retry_strategy: 15,
})

var bodyParser = require('body-parser');

const cors = require('cors')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


/***************Mongodb configuratrion********************/
var mongoose = require('mongoose');
var configDB = require('./config/database.js');
//configuration ===============================================================
// mongoose.connect(configDB.url, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }, () => {
//     console.log("Connect Database")
// }); // connect to our database
mongoose.connect(
    'mongodb://mongocc32:27017/comcamp', {
    // 'mongodb://localhost:27017/comcamp', {
    user: 'root',
    pass: 'comcamp32dbeuei',
    authSource: 'admin',
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
}, (err) => console.log('mongodb err', err))


require('./app/passport')(passport); // pass passport for configuration

app.use(cors({
    origin: true,
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
}))

//session required for passport
app.use(session({
    store: new RedisStore({ client: redisClient, }),
    secret: 'WeLoveComcamp32EiEi',
    resave: false,
    saveUninitialized: false,
    cookie: { maxAge: 30 * 60 * 1000 }
}));

app.use(passport.initialize());
app.use(passport.session()); // persistent login sessions

// routes ======================================================================
require('./app/routes.js')(app, passport); // load our routes and pass in our app and fully configured passport


//launch ======================================================================
app.listen(port);
https.createServer({
    key: fs.readFileSync(path.join(__dirname, '/credentials', 'server.key')),
    cert: fs.readFileSync(path.join(__dirname, '/credentials', 'server.cert'))
  }, app).listen(443, () => {
    console.log('Listening 443')
  })
console.log('The magic happens on port ' + port);

exports = module.exports = app;