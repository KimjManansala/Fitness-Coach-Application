require('dotenv').config()
const express = require("express");
const router = express.Router();

const bodyParser = require("body-parser");
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const db = require("../../models");
const Sequelize = require("sequelize");
const validator = require("email-validator");
const bcrypt = require("bcrypt");
const saltRounds = 10;
router.use(bodyParser.json());

router.use(
    bodyParser.urlencoded({
        extended: false
    })
);
module.exports = router;



router.post("/create/user", (req, res) => {
    console.log('hello')
    console.log(User)
    let user = req.body.user;
    if (validator.validate(user.email)) {
        bcrypt
            .hash(user.password, saltRounds)
            .then(password => {
                createUser(user.email, password, user.fName, user.lName)
                    .then(data => {
                        if (data.created) {
                            req.session.user = data.member.dataValues

                            res.send({
                                success: true,
                                user: data.member.dataValues
                            });
                        } else {
                            res.send({
                                error: {
                                    username: "Username is taken"
                                }
                            });
                        }
                    })

                    .catch(er => {
                        console.log(er);
                        res.send({
                            error: {
                                register: "Error in registering"
                            }
                        });
                    });
            })

            .catch(er => {
                console.log(er);
                res.send({
                    error: {
                        register: "Error in registering"
                    }
                });
            });
    } else {
        res.send({
            error: {
                email: "Invalid Email"
            }
        });
    }
});

function createUser(email, hash, firstName, lastName) {
    console.log(User)

    return new Promise((resolve, reject) => {
        db.User.findOrCreate({
                where: {
                    email: email
                },
                defaults: {
                    password: hash,
                    firstName: firstName,
                    lastname: lastName,
                    email: email,
                }
            })
            .spread((user, created) => {
                console.log(created);
                let data = {
                    member: user,
                    created: created
                };
                resolve(data);
            })
            .catch(er => {
                console.log(
                    "~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~"
                );
                reject(er);
            });
    });
}


















































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
        scope: ["profile", "email"]
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