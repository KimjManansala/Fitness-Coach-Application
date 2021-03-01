const express = require('express');
const session = require('express-session');
const compress = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
require('dotenv').config()
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;


// OAuth 2.0-based strategies require a `verify` function which receives the
// credential (`accessToken`) for accessing the Facebook API on the user's
// behalf, along with the user's profile.  The function must invoke `cb`
// with a user object, which will be set at `req.user` in route handlers after
// authentication.
passport.use(new GoogleStrategy({
    clientID: process.env.GOOGLE_AUTH_CLIENT_ID,
    clientSecret: process.env.GOOGLE_AUTH_CLIENT_SECRET,
    callbackURL: '/auth/google/callback"'
  },
  function(accessToken, refreshToken, profile, cb) {
    // In this example, the user's Facebook profile is supplied as the user
    // record.  In a production-quality application, the Facebook profile should
    // be associated with a user record in the application's database, which
    // allows for account linking and authentication with other identity
    // providers.
    // function(accessToken, refreshToken, profile, cb) {
    //     User.findOrCreate({ googleId: profile.id }, function (err, user) {
    //       return cb(err, user);
    //     });
    //   }
    return cb(null, profile);
  }));


// heroku
// const sslRedirect = require('heroku-ssl-redirect');

const app = express();


// heroku
// app.use(sslRedirect());

const buildPath = path.join(__dirname, '..', 'build');

app.use(express.static(buildPath));
app.use(compress());

app.use(bodyParser.json({limit: '5mb'}));
app.use(bodyParser.urlencoded({ limit: '5mb', extended: false }));


// ALL ROUTES WILL GO HERE IMPORTED FROM THE ROUTES IN THE API DIRECTORY
app.get('/auth/google',
  function (req, res) {
    passport.authenticate('google', { scope: ['profile'] })
  }
  );

app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
      console.log('helloo')
    // Successful authentication, redirect home.
    res.redirect('/');
  });

// frontend entry
app.use('*', (req, res) => {
    res.sendFile(path.join(__dirname, '..', 'build/index.html'));
});



// Handles unknown routes
app.use((req, res, next) => {
    const err = new Error('Not Found');
    err.status = 404;
    console.log(err);
    res.send('404: Page Not Found');
    next(err);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}!`);
});