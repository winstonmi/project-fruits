const mongoose = require('mongoose')

const OrangeSchema = mongoose.Schema({
  origin: String,
  color: String,
  price: Number
})

var Orange = mongoose.model('Orange', OrangeSchema)

module.exports = Orange
