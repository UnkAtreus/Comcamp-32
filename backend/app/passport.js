var User = require('./models/User');
const FacebookStrategy = require('passport-facebook').Strategy
const { facebook } = require('../config/auth')
const mongoose = require('mongoose')


//expose this function to our app using module.exports
module.exports = function(passport) {

    // =========================================================================
    // passport session setup ==================================================
    // =========================================================================
    // required for persistent login sessions
    // passport needs ability to serialize and unserialize users out of session

    // used to serialize the user for the session
    passport.serializeUser((user, done) => {
        done(null, user.id);
    });

    // used to deserialize the user
    passport.deserializeUser((id, done) => {
        User.findById(id)
        .then( (user) => {
            // console.log(user)
            done(null, user)
        })
    });


    passport.use(new FacebookStrategy({
        clientID: facebook.APP_ID,
        clientSecret: facebook.APP_SECRET,
        callbackURL: facebook.callbackURL
    }, function(accessToken, refreshToken, profile, done) {
        console.log("profile", profile)

        User.findOne({facebookId : profile.id})
        .then( (existingUser) => {
            if(existingUser) {
                console.log("already existing User")
                done(null, existingUser)
            }
            else {
                console.log("create new User")
                new User({
                    facebookId: profile.id,
                    displayName: profile.displayName

                }).save()
                .then( user => {
                    done(null, user)
                })
            }
        })
    }
    ));

};

    
    





