const Orange = require('../models/orange')
// GET
function getAll (req, res) {
  Orange.find(function (err, oranges) {
    if (err) res.json({message: 'could not find orange'})
    res.send(oranges)
  })
  // find 'oranges' where do they exist?
}

function getOrange (req, res) {
  let id = req.params.id

  Orange.findById({_id: id}, function (err, orange) {
    if (err) res.json({message: 'could not find orange b/c: ' + err})

    res.json({orange: orange})
  })
}
// POST
function createOrange (req, res) {
  let orange = new Orange()

  orange.origin = req.body.origin
  orange.color = req.body.color
  orange.price = req.body.price

  orange.save((err, orange) => {
    if (err) res.json({message: 'could not create orange b/c: ' + err})

    console.log(Orange.findOne({auth_token: req.query.auth_token}))
    res.send(orange)
  })
}

module.exports = {
  getAll: getAll,
  getOrange: getOrange,
  createOrange: createOrange
}
