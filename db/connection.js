const mongoose = require('mongoose')

mongoose.Promise = Promise

mongoose.connect('mongodb://localhost/roadie')
  .then(connection => console.log('connected!'))
  .catch(err => console.log('connection failed!', err))

module.exports = mongoose
