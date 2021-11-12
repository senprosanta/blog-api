const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const helmet = require('helmet')

//Import router
const router = require('./routes/routes')


//Init app
const app = express()

//server static files
app.use(express.static('public'))

//Enable cors
app.use(cors())

//morgan
if (process.env.NODE_ENV === process.env.DEV) {
    app.use(morgan(':method :url :status :res[content-length] - :response-time ms'))
}

//helmet
app.use(helmet())

//set routes
app.use('/api/v1', router)
//export app
module.exports = app