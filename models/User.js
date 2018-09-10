const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
  firstName: String,
  lastName: String,
  image: String,
  city: String,
  state: String,
  recsVisited: Number,
  email: String,
  password: String
})

mongoose.model('User', User)

module.exports = mongoose
