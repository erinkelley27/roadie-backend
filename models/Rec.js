const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Rec = new Schema({
  name: String,
  image: String,
  address: String,
  city: String,
  state: String,
  menuItem: String,
  parking: Boolean,
  kids: Boolean,
  dogs: Boolean,
  type: String
})

mongoose.model('Rec', Rec)

module.exports = mongoose
