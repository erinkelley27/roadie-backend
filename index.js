const express = require('express')
const parser = require('body-parser')
const cors = require('cors')
const passport = require('./config/passport')()

const app = express()

// const indexController = require('./controllers/index.js')
const recController = require('./controllers/rec.js')
const userController = require('./controllers/user.js')

app.set('port', process.env.PORT || 3001)
app.use(parser.json())
app.use(cors())
app.use(passport.initialize())

// app.use('/', indexController)
app.use('/', recController)
app.use('/user', userController)

// app.listen(3001, () => console.log('listening on port 3001'))
// app.listen(app.get('port'), () => {
//   console.log(`✅ PORT: ${app.get('port')} 🌟`)
// })

app.listen(app.get('port'), () => {
  console.log('Server listening on port ' + app.get('port'))
})
