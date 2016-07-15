const mongoose = require('mongoose')

const BananaSchema = mongoose.Schema({
  origin: String,
  color: String,
  price: Number
})

var Banana = mongoose.model('Banana', BananaSchema)

module.exports = Banana
