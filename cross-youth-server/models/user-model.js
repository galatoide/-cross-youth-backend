const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const userSchema = new Schema({
  username: String,
  password: String,
  email: String,
  firstName: String,
  lastName: String,
  groups: [],
  profileImageUrl: {
    type: String,
    default: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png'
  },
  profileImageName: {
    type: String,
    default: 'default-avatar'
  },
  profileBackgroundUrl: {
    type: String,
    default: 'https://www.jodilogik.com/wordpress/wp-content/uploads/2016/05/people-1.png'
  },
  profileBackgroundName: {
    type: String,
    default: 'default-background'
  },
}, 
{
  timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;