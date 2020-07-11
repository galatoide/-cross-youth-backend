const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const groupSchema = new Schema({
  title: String,
  initials: String,
  description: String,
  activities: String,
  backgroundUrl: {
    type: String,
    default: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png'
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