const mongoose = require('mongoose')

const CheeseSchema = mongoose.Schema({
  origin: String,
  color: String,
  price: Number
})



var Cheese = mongoose.model('Cheese', CheeseSchema)

module.exports = Cheese
