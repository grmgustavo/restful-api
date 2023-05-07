var createError = require('http-errors')
var express = require('express')
var path = require('path')
var cookieParser = require('cookie-parser')
var logger = require('morgan')

var indexRouter = require('./routes/index')
var usersRouter = require('./routes/users')

var app = express()

//Set up default mongoose connection
const mongoose = require('mongoose')

mongoose.connect('mongodb://localhost:27017/express-mongo', { useNewUrlParser: true, useUnifiedTopology: true })

//Get the default connection
const db = mongoose.connection

//Bind connection to error event (to get notification of connection errors)
db.on('error', console.error.bind(console, 'MongoDB connection error:'))
db.once('open', function () {
  console.log('MongoDB connection success!')
})

app.use(logger('dev'))
app.use(express.json())

app.use('/', indexRouter)
app.use('/users', usersRouter)


module.exports = app
