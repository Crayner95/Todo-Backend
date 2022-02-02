const express = require('express')
const User = require('../models/User');
const router = express.Router();
const { isAuthenticated } = require('../Middleware');
const mongoose = require('mongoose');

router.get('/user', function (req, res) {
    res.json(req.user)
});


module.exports = router;