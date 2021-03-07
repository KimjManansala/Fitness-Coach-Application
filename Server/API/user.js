require('dotenv').config()
const express = require("express");
const router = express.Router();
// const validator = require("email-validator");
// const bcrypt = require("bcrypt");
const bodyParser = require("body-parser");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const User = require('../../models/user');

router.use(bodyParser.json());

router.use(
    bodyParser.urlencoded({
        extended: false
    })
);
module.exports = router;


// Configure Passport authenticated session persistence.
//
// In order to restore authentication state across HTTP requests, Passport needs
// to serialize users into and deserialize users out of the session.  In a
// production-quality application, this would typically be as simple as
// supplying the user ID when serializing, and querying the user record by ID
// from the database when deserializing.  However, due to the fact that this
// example does not have a database, the complete Twitter profile is serialized
// and deserialized.
passport.serializeUser(function (user, cb) {
    cb(null, user);
});

passport.deserializeUser(function (obj, cb) {
    cb(null, obj);
});

passport.use(new GoogleStrategy({
        clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
        clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
        callbackURL: 'http://localhost:3000'
    },
    function (token, tokenSecret, profile, cb) {
        console.log('hello')
        console.log(profile)
        User.findOrCreate({
            googleId: profile.id
        }, function (err, user) {
            return cb(err, user);
        });
    }
));

router.use(passport.initialize());
router.use(passport.session());

router.get('/auth/google',
    passport.authenticate('google', {
        scope:  ["profile", "email"]
    }));

router.get('/auth/google/callback',
    passport.authenticate('google', {
        failureRedirect: '/login'
    }),
    function (req, res) {
        // Successful authentication, redirect home.

        res.redirect('http://localhost:3000');
    });

router.get("/", (req, res) => {

})