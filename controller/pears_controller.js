const Pear = require('../models/pear')

// GET
function getAll (req, res) {
  Pear.find(function (err, pears) {
    if (err) res.json({message: 'could not find Pear'})
    res.send(pears)
  })
}

function getPear (req, res) {
  let id = req.params.id

  Pear.findById({_id: id}, function (err, pear) {
    if (err) res.json({message: 'could not find Pear b/c: ' + err})

    res.json({pear: pear})
  })
}
// Pear
function createPear (req, res) {

  let pear = new Pear()
  console.log('i am in createPear')
  console.log(req.body.origin)
  console.log(pear.origin)
  pear.origin = req.body.origin
  pear.color = req.body.color
  pear.price = req.body.price

  pear.save((err, pear) => {
    if (err) res.json({message: 'could not create Pear b/c: ' + err})

    console.log(Pear.findOne({auth_token: req.query.auth_token}))
    res.send(pear)
  })
}

module.exports = {
  getAll: getAll,
  getPear: getPear,
  createPear: createPear
}
