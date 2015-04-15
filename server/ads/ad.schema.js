var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// create a schema
var adSchema = new Schema({
  title: String,
  link: { type: String, required: true, unique: true },
  description: { type: String, required: true },
  price: Number,
  location: String,
  imgUrl: String,
  created_at: Date,
  updated_at: Date
});

adSchema.pre('save', function(next) {
  var currentDate = new Date();

  this.updated_at = currentDate;

  if(!this.created_at) {
    this.created_at = currentDate;
  }

  next();
})

// the schema is useless so far
// we need to create a model using it
var Ad = mongoose.model('Ad', adSchema);

// make this available to our users in our Node applications
module.exports = Ad;