const express = require('express')
const parser = require('body-parser')
const cors = require('cors')

const app = express()

app.use(parser.json())
app.use(cors())

app.listen(3001, () => console.log('listening on port 3001'))
