const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const PostSchema = new Schema({
   title: {type: String, required: true, minLength: 2},
   content: {type: String, required: true, minLength: 2},
   author: {type: Schema.Types.ObjectId, ref: 'Author', required: true},
   published: Boolean, 

},
{ timestamps: true }
);

module.exports = mongoose.model('Post', PostSchema);