const mongoose = require('mongoose');
const db = require('../db');

// create a new mongo model for "Pet"
const TodoSchema = new mongoose.Schema({
    note: String,
    ownedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'todoUsers' },

});
const Todo = mongoose.model('todos', TodoSchema);

module.exports = Todo;
