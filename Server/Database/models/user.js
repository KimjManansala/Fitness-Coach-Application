mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    password: String,
    user_type: String,
    user_weight: Number,
    user_height: Number,
    user_age: Number,
    user_phone: String,
    user_email: String,
  });
module.exports = User = mongoose.model('user', UserSchema);