const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const CommentSchema = new Schema({
    content: {type: String, required: true, minLength: 2},
    post: {type: Schema.Types.ObjectId, ref: 'Post', required: true},
    username: {type: String, required: true},
    email: {type: String, required: true}
}, 
{timestamps: true},
);

module.exports = mongoose.model('Comment', CommentSchema);