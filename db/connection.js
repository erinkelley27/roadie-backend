const mongoose = require('mongoose')

mongoose.Promise = Promise

if (process.env.NODE_ENV == 'production') {
  mongoose.connect(process.env.MLAB_URL)
} else {
  mongoose.connect('mongodb://localhost/roadie')
}

// mongoose.connect('mongodb://localhost/roadie')
//   .then(connection => console.log('connected!'))
//   .catch(err => console.log('connection failed!', err))

module.exports = mongoose
