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

// PUT
function updateOrange (req, res) {
  let id = req.params.id

  Orange.findById({_id: id}, (err, orange) => {
    if (err) res.json({message: 'could not find post b/c: ' + err})
    if (req.body.origin) orange.origin = req.body.origin
    if (req.body.color) orange.color = req.body.color
    if (req.body.price) orange.price = req.body.price

    orange.save((err) => {
      if (err) res.json({message: 'could not update post b/c: ' + err})
      res.json({message: 'orange successfully updated'})
    })
  })
}

// DELETE
function destroyOrange (req, res) {
  let id = req.params.id

  Orange.remove({_id: id}, (err) => {
    if (err) res.json({message: 'could not delete post b/c: ' + err})
    res.json({message: 'orange successfully deleted'})
  })
}

module.exports = {
  getAll: getAll,
  getOrange: getOrange,
  createOrange: createOrange,
  updateOrange: updateOrange,
  destroyOrange: destroyOrange
}
