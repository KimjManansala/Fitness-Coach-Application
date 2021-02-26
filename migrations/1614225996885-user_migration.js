const User = require('../Server/Database/models/user.js');


/**
 * Make any changes you need to make to the database here
 */
async function up () {
  // Write migration here

  User.create({
    firstName: 'Test Client',
    lastName: 'Client',
    password: 'password',
    user_type: 'client',
    user_weght: 70,
    user_age: 21,
    user_phone: '1231231234',
    user_email: 'coach@gmail.com',
  })
  .then(function(dbUser) {
    console.log('Yay made new user');
    console.log(dbUser);
  })
  .catch(function(err) {
    // If an error occurs, send the error to the client
    console.log(`ERROR: ${err}`)
  });

  User.create({
    firstName: "Test Trainer",
    lastName: "Trainer",
    password: 'password',
    user_type: "trainer",
    user_weght: 80,
    user_age: 21,
    user_phone: "1231231234",
    user_email: "trainer@gmail.com",
  })
  .then(function(dbUser) {
    console.log('Yay made new user');
    console.log(dbUser);
  })
  .catch(function(err) {
    // If an error occurs, send the error to the client
    console.log(`ERROR: ${err}`)
  });
}

/**
 * Make any changes that UNDO the up function side effects here (if possible)
 */
async function down () {
  // Write migration here
}

module.exports = { up, down };
