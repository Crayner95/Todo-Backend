const express = require('express')
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

router.post('/register', async (req, res, next) => {
    // try {
    const result = await User.register({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phone: req.body.phone,
        username: req.body.username,
    }, req.body.password);
    res.json(result.data);

    // } catch (err) {
    //     res.status(500).json(err)
    // }
})

router.post('/login', function (req, res) {
    res.json(req.user);
});


module.exports = router;
