const mongoose = require('mongoose');
const db = require('../db');


const TodoSchema = new mongoose.Schema({
    note: String,
    ownedBy: { type: mongoose.Schema.Types.ObjectId, ref: 'todoUsers' },
    isChecked: Boolean

});
const Todo = mongoose.model('todos', TodoSchema);

module.exports = Todo;
