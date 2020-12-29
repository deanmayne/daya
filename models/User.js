const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }, 
  following: [{type: mongoose.Schema.Types.ObjectId, ref: 'User'}]
}, {
  timestamps: true

})

UserSchema.methods.follow = function(id) {
  if(this.following.indexOf(id) === -1){
    this.following.push(id)
  }
  return this.save();
}

UserSchema.methods.unfollow = function(id) {
  this.following.remove(id);
  return this.save();
}

UserSchema.methods.isFollowing = function(id) {
  return this.following.includes(id)
  // if we need a a string?
}





module.exports = User = mongoose.model('User', UserSchema)