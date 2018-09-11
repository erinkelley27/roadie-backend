const express = require('express')
const router = express.Router()
const mongoose = require('../models/Rec')
const Rec = mongoose.model('Rec')

// List all Roadie Recs
router.get('/roadierecs', (req, res) => {
  console.log('recs list is working')
  Rec.find({})
    .then(recs =>
      res.json(recs))
})

// Roadie Rec show page
router.get('/roadierecs/:id', (req, res) => {
  console.log('rec show page is working')
  Rec.findById(req.params.id)
    .then((rec) => {
      res.json(rec)
    })
})

module.exports = router
