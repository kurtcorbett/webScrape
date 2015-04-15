var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var adSchema = new Schema({
  title: String,
  link: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: Number,
  location: String,
  img: String,
  created_at: Date,
  updated_at: Date
});

// the schema is useless so far
// we need to create a model using it
var User = mongoose.model('User', userSchema);

// make this available to our users in our Node applications
module.exports = User;