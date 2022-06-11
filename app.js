require('dotenv').config();
const Author = require('./models/author.js');
const cors = require('cors');
const express = require('express');
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

const blogRouter = require('./routes/blog');

const app = express();

app.use(session({ secret: "cats", resave: false, saveUninitialized: true }));

passport.use(
    new LocalStrategy((username, password, done) => {
      Author.findOne({ username: username }, (err, user) => {
        if (err) { 
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect username" });
        }
        if (user.password !== password) {
          return done(null, false, { message: "Incorrect password" });
        }
        return done(null, user);
      });
    })
); 

passport.serializeUser(function(user, done) {
    done(null, user.id);
  });
  
  passport.deserializeUser(function(id, done) {
    User.findById(id, function(err, user) {
      done(err, user);
    });
  });

app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.use('/blog', blogRouter);

mongoose.connect(process.env.mongoDB, {useNewUrlParser: true, useUnifiedTopology: true});
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// const message = {content: "My name is Mih_coder"};

app.get('/', cors(), (req, res) => {
    res.redirect('/blog');
})

app.listen(process.env.port, () => {
    console.log(`The app is listening on port ${process.env.port}`);
});
