const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  title: String,
  initials: String,
  description: String,
  activities: String, // volunteering, choir, meettings, other
  posts: [{ 
    type: Schema.Types.ObjectId,
    ref: 'Post'
  }]
}, 
{
  timestamps: true
});

const Group = mongoose.model('Groups', groupSchema);

module.exports = Group;