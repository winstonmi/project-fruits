const mongoose = require('mongoose')

const AppleSchema = mongoose.Schema({
  origin: String,
  color: String,
  price: Number
})

var Apple = mongoose.model('Apple', AppleSchema)

module.exports = Apple
