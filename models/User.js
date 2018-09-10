const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const User = new Schema({
  email: String,
  firstName: String,
  lastName: String,
  hometown: String,
  state: String,
  image: String,
  password: String
})

mongoose.model('User', User)

module.exports = mongoose
