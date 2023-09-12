// DEPENDENCIES
const express = require('express')
const mongoose = require('mongoose')
const books = require('./controllers/books_controller')

// CONFIGURATION
require('dotenv').config()
const PORT = process.env.PORT
const app = express()
mongoose.connect(process.env.MONGO_URI, {useNewUrlParser: true, useUnifiedTopology: true}, 
    () => { console.log('connected to mongo: ', process.env.MONGO_URI) }
)

// MIDDLEWARE
app.use(express.urlencoded({extended: true}))

// ROUTES
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// Books Controller
const booksController = require('./controllers/books_controller')
app.use('/books', booksController)

