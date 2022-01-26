const express = require('express')
const router = express.Router();
const { isAuthenticated } = require('../Middleware')
const Todo = require('../models/Todo');


router.get('/todos', isAuthenticated, async (req, res) => {
    const searchParams = {}
    searchParams.ownedBy = req.user
    const allTodos = await Todo.find(searchParams);
    res.json(allTodos);
})

router.post('/todos', isAuthenticated, async (req, res) => {
    const newTodo = await Todo.create({
        note: req.body.note,
        ownedBy: req.user
    })

    res.json(newTodo)
})

router.delete('/todos/:id', isAuthenticated, async (req, res) => {
    const { id } = req.params
    await Todo.findByIdAndDelete(id)
    res.end();
})

router.put('/todos/:id', isAuthenticated, async (req, res) => {
    const { id } = req.params
    const todo = await Todo.findById(id);

    if (req.body.note) {
        todo.note = req.body.note
    }

    await todo.save();

    res.json(todo);
})

module.exports = router;
