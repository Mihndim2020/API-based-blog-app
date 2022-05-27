const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const AuthorSchema = new Schema({
    username: {type: String, required: true, minLength: 2},
    password: {type: String, required: true, minLength: 6}
});

module.exports = mongoose.model('Author', AuthorSchema);