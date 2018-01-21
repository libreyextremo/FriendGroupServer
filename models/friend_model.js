const mongoose = require('mongoose');
require('mongoose-type-email');
const Schema = mongoose.Schema;

/*
"A": active
"P": pending confirmation
"D": deactivated
*/
const CommentStatusType = ["N", "D", "V"];

/*
"A": active
"P": pending confirmation
"D": deactivated
*/
const UserStatusType = ["A", "P", "V"];

/*
"W": woman
"M": man
*/
const GenderType = ["W", "M"];

const CommentModelSchema = new Schema({
  id: {type: Number, required: [true, 'Id field is required'] },
  created: {type: Date, default: Date.now },
  modified: {type: Date, default: Date.now },
  subject: {type: String, required: [true, 'Subject field is required'] },
  body: {type: String, required: [true, 'Body field is required'] },
  status: {type: CommentStatusType, required: [true, 'Status field is required'] },
  rating: {type: Number, required: [true, 'Rating is required'] },
  user: {type: String, required: [true, 'Body field is required'] },
  consultant: {type: Number, required: [true, 'Price field is required'] }
});

const FriendModelSchema = new Schema({
  id: {type: Number, required: [true, 'Id field is required'] },
  comments: [{type: CommentModelSchema}],
  created: {type: Date, default: Date.now },
  modified: {type: Date, default: Date.now },
  uuid: {type: String, required: [true, 'Uuid field is required'] },
  email: {type: mongoose.SchemaTypes.Email, required: [true, 'Email field is required'] },
  short_name: {type: String, required: [true, 'Short name field is required'] },
  full_name: {type: String, required: [true, 'Full name field is required'] },
  date_joined: {type: Date, default: Date.now },
  status: {type: UserStatusType, required: [true, 'User status field is required'] },
  gender: {type: GenderType, required: [true, 'Gender field is required'] },
  short_me: {type: String, required: [true, 'Short me field is required'] },
  location: {type: String, required: [true, 'Location field is required'] },
  profile_picture: {type: String}
});

// set relation between KUserModelSchema and clientmodel
const FriendModel= mongoose.model('friends', FriendModelSchema);

module.exports = FriendModel;
