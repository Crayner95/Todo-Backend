require('dotenv').config();
const express = require('express')
const cookieSession = require('cookie-session')
const passport = require('passport')
const app = express();

const auth = require('./routes/Auth');
const users = require('./routes/Users');
const todos = require('./routes/Todos');


const User = require('./models/User');

app.use(cookieSession({
    secret: process.env.COOKIE_SECRET,
    resave: true,
    saveUninitialized: true,
    cookie: { maxAge: 60 * 60 * 1000 } // 1 hour
}));


app.use(express.urlencoded({ extended: false }));
app.use(express.json())
app.use(passport.initialize());
app.use(passport.session());

// uses the passport-local-mongoose plugin to creates a strategy function 
// that authenticates the user using the User model
passport.use(User.createStrategy());

// To use with sessions
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

app.use('/api', auth);
app.use('/api', users);
app.use('/api', todos);


app.listen(process.env.PORT, () => {
    console.log(`listening on port ${process.env.PORT}`)
})

