const mongoose = require('mongoose')

const PearSchema = mongoose.Schema({
  origin: String,
  color: String,
  price: Number
})



var Pear = mongoose.model('Pear', PearSchema)

module.exports = Pear
