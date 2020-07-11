const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const postSchema = new Schema({
  post: String,
  group: {
    type: Schema.Types.ObjectId,
    ref: 'Group'
  }}, 
  {
    timestamps: true
  });

const Post = mongoose.model('Post', postSchema);

module.exports = Post;