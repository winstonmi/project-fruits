const Cheese = require('../models/cheese')

// GET
function getAll (req, res) {
  Cheese.find(function (err, cheeses) {
    if (err) res.json({message: 'could not find cheese'})
    res.send(cheeses)
  })
}

function getCheese (req, res) {
  let id = req.params.id

  Cheese.findById({_id: id}, function (err, cheese) {
    if (err) res.json({message: 'could not find cheese b/c: ' + err})

    res.json({cheese: cheese})
  })
}
// APPLE
function createCheese (req, res) {

  let cheese = new Cheese()
  console.log('i am in createCheese')
  console.log(req.body.origin)
  console.log(cheese.origin)
  cheese.origin = req.body.origin
  cheese.color = req.body.color
  cheese.price = req.body.price

  cheese.save((err, cheese) => {
    if (err) res.json({message: 'could not create cheese b/c: ' + err})

    console.log(Cheese.findOne({auth_token: req.query.auth_token}))
    res.send(cheese)
  })
}

module.exports = {
  getAll: getAll,
  getCheese: getCheese,
  createCheese: createCheese
}
