const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Rec = new Schema(
  {
    name: String,
    image: String,
    fullAdress: String,
    address: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    website: String,
    menuItem: String,
    parking: Boolean,
    kids: Boolean,
    dogs: Boolean,
    type: String
  },
  { collection: 'recs' }
)

mongoose.model('Rec', Rec)

module.exports = mongoose
