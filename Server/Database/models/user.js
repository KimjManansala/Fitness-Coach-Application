mongoose = require('mongoose');

const { Schema } = mongoose;
const UserSchema = new Schema({
    firstName: String,
    lastName: String,
    user_type: String,
    user_weight: Number,
    user_height: Number,
    user_age: Number,
    user_phone: Number,
    user_email: String,
  });
module.exports = mongoose.model('user', UserSchema);