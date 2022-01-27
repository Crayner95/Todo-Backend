const express = require('express')
const router = express.Router();
const passport = require('passport');
const User = require('../models/User');

router.post('/register', async (req, res, next) => {
    try {
        const result = await User.register({
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            username: req.body.username,
        }, req.body.password);

        passport.authenticate('local')(req, res, () => {
            res.json(result);
        })

    } catch (err) {
        res.status(500).json(err)
    }
})

router.post('/login', passport.authenticate('local'), function (req, res) {
    res.json(req.user);
});

router.get('/logout', function (req, res) {
    req.logout();
    res.end()
});


module.exports = router;
