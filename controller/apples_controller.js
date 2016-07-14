const Apple = require('../models/apple')

// function listApples (req, res) {
//   Apple.find((err, applesArray) => {
//     if (err) return res.status(404).json({message: 'Apple not found'})
//
//     // rather than return all data which could be huge, we create a simplified array with only a couple of key fields
//     const simplifiedList = []
//     for (let i = 0; i < applesArray.length; ++i) {
//       simplifiedList.push({id: applesArray[i].id, title: applesArray[i].name})
//     }
//     res.status(200).json(simplifiedList)
//   })
// }
// function showApples (req, res) {
//   Apple.findById({_id: req.params.id}, (err, apple) => {
//     if (err) return res.status(404).json({message: 'Apple not found'})
//
//     res.status(200).json(apple)
//   })
// }

// GET
function getAll (req, res) {
  Apple.find(function (err, apples) {
    if (err) res.json({message: 'could not find apple'})
    res.send(apples)
  })
}

function getApple (req, res) {
  let id = req.params.id

  Apple.findById({_id: id}, function (err, apple) {
    if (err) res.json({message: 'could not find apple b/c: ' + err})

    res.json({apple: apple})
  })
}
// APPLE
function createApple (req, res) {

  let apple = new Apple()
  console.log('i am in createApple')
  console.log(req.body.origin)
  console.log(apple.origin)
  apple.origin = req.body.origin
  apple.color = req.body.color
  apple.price = req.body.price

  apple.save((err, apple) => {
    if (err) res.json({message: 'could not create apple b/c: ' + err})

    console.log(Apple.findOne({auth_token: req.query.auth_token}))
    res.send(apple)
  })
}

module.exports = {
  getAll: getAll,
  getApple: getApple,
  createApple: createApple
}
