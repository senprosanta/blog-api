const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

//Import router
const router = require('./routes/routes')


//Init app
const app = express()

//server static files
app.use(express.static('public'))

//set routes
app.use('/api/v1', router)
//export app
module.exports = app