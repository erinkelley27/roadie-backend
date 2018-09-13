const mongoose = require('../db/connection')
const Schema = mongoose.Schema

const Rec = new Schema(
  {
    name: String,
    image: String,
    fullAdress: String,
    lat: Number,
    lng: Number,
    address: String,
    city: String,
    state: String,
    zip: String,
    phone: String,
    website: String,
    menuItem: String,
    parking: String,
    kids: String,
    dogs: String,
    type: String
  },
  { collection: 'recs' }
)

mongoose.model('Rec', Rec)

module.exports = mongoose
