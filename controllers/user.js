const express = require('express')
const router = express.Router()
const jwt = require('jwt-simple')
const passport = require('../config/passport')
const config = require('../config/config')
const mongoose = require('../models/User')
const User = mongoose.model('User')

// List all Users
router.get('/', (req, res) => {
  console.log('user list is working')
  User.find({})
    .then(users =>
      res.json(users))
})

// User profile show page
router.get('/:id', (req, res) => {
  console.log('user show page is working')
  User.findById(req.params.id)
    .then((user) => {
      res.json(user)
    })
})

// User signup
router.post('/signup', (req, res) => {
  if (req.body.email && req.body.password) {
    let newUser = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      image: req.body.image,
      city: req.body.city,
      state: req.body.state,
      recsVisited: req.body.recsVisited,
      email: req.body.email,
      password: req.body.password
    }
    User.findOne({ email: req.body.email })
      .then((user) => {
        if (!user) {
          User.create(newUser)
            .then(user => {
              if (user) {
                var payload = {
                  id: newUser.id
                }
                var token = jwt.encode(payload, config.jwtSecret)
                res.json({
                  token: token
                })
              } else {
                res.sendStatus(401)
              }
            })
        } else {
          res.sendStatus(401)
        }
      })
  } else {
    res.sendStatus(401)
  }
})

// User login
router.post('/login', (req, res) => {
  if (req.body.email && req.body.password) {
    User.findOne({ email: req.body.email })
      .then(user => {
        if (user) {
          if (user.password === req.body.password) {
            var payload = {
              id: user.id
            }
            var token = jwt.encode(payload, config.jwtSecret)
            res.json({
              token: token
            })
          } else {
            res.sendStatus(401)
          }
        } else {
          res.sendStatus(401)
        }
      })
  } else {
    res.sendStatus(401)
  }
})

module.exports = router
