require('dotenv').config();
const cors = require('cors');
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose'); 

const blogRouter = require('./routes/blog');

const app = express();

app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
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
