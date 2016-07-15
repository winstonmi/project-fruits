const Banana = require('../models/banana')

// GET
function getAll (req, res) {
  Banana.find(function (err, bananas) {
    if (err) res.json({message: 'could not find banana'})
    res.send(bananas)
  })
}

function getBanana (req, res) {
  let id = req.params.id

  Banana.findById({_id: id}, function (err, banana) {
    if (err) res.json({message: 'could not find banana b/c: ' + err})

    res.json({banana: banana})
  })
}
// banana
function createBanana (req, res) {
  let banana = new Banana()
  console.log('i am in createBanana')
  console.log(req.body.origin)
  console.log(banana.origin)
  banana.origin = req.body.origin
  banana.color = req.body.color
  banana.price = req.body.price

  banana.save((err, banana) => {
    if (err) res.json({message: 'could not create banana b/c: ' + err})

    console.log(Banana.findOne({auth_token: req.query.auth_token}))
    res.send(banana)
  })
}

module.exports = {
  getAll: getAll,
  getBanana: getBanana,
  createBanana: createBanana
}
