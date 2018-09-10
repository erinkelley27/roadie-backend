const mongoose = require('../models/Rec')
const data = require('./data')

const Rec = mongoose.model('Rec')

Rec.remove({})
  .then(_ => {
    Rec.collection.insert(data)
      .then(recs => {
        console.log(data)
        process.exit()
      })
      .catch(err => {
        console.log(err)
      })
  })
