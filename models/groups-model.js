const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  title: String,
  initials: String,
  description: String,
  activities: [],
  backgroundUrl: {
    type: String,
    default: 'https://images.pexels.com/photos/853168/pexels-photo-853168.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260'
  }, // volunteering, choir, meettings, other
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