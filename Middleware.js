function isAuthenticated(req, res, next) {
    if (req.user)
        return next();
    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.status(401).json({
        "status": "error",
        "message": "no user"
    })
}

module.exports = { isAuthenticated };