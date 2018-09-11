const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()

const app = express()

const recController = require('./controllers/rec.js')
const userController = require('./controllers/user.js')

app.use(parser.json())
app.use(cors())
app.use(passport.initialize())

app.use('/', recController)
app.use('/user', userController)

app.listen(3001, () => console.log('listening on port 3001'))
