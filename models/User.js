const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');
const db = require('../db');

// Create Model

const TodoUserSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    phone: String,
    username: String,
});
// Export Model
TodoUserSchema.plugin(passportLocalMongoose); // lets you register+login with mongoose.
const User = mongoose.model('todoUsers', TodoUserSchema);

// this is how you register a new user
// UserModel.register({username: "foo"}, "bar");

module.exports = User;