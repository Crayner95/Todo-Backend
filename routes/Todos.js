const express = require('express')
const router = express.Router();
const { isAuthenticated } = require('../Middleware')
const Todo = require('../models/Todo');


router.get('/todos', isAuthenticated, async (req, res) => {
    const searchParams = {}
    searchParams.ownedBy = req.user
    const mypets = await Pet.find(searchParams);
    res.json(mypets);
})

router.post('/todos', isAuthenticated, async (req, res) => {
})

router.delete('/todos/:id', isAuthenticated, async (req, res) => {
    Todo.findByIdAndDelete(req.params.id)
    res.end();
})

router.put('/todos/:id', isAuthenticated, async (req, res) => {
    const todos = await Todo.findById(req.params.id);

    if (req.body.note) {
        user.note = req.body.note
    }

    await todos.save();

    res.json(todos);
})

module.exports = router;
