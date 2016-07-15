const express = require('express')
const router = express.Router()


const applesController = require('../controller/apples_controller')
const cheesesController = require('../controller/cheeses_controller')
const orangesController = require('../controller/oranges_controller')

router.route('/apples')
// '/apples' GET
.get(applesController.getAll)
.post(applesController.createApple)

router.route('/cheeses')
// '/cheeses' GET
.get(cheesesController.getAll)
.post(cheesesController.createCheese)

router.route('/oranges')
// '/apples' GET
.get(orangesController.getAll)
.post(orangesController.createOrange)

router.route('/oranges/:id')
// 'oranges/:id' GET
.get(orangesController.getOrange)
// '/oranges/:id' PUT
.put(orangesController.updateOrange)
// '/oranges/:id' DELETE
.delete(orangesController.destroyOrange)

// router.route('/apples/:id')
// // '/apples/:id' GET
// .get(applesController.getApple)
// // '/apples/:id' PUT
// .put(applesController.updateApple)
// // '/apples/:id' DESTROY
// .delete(applesController.destroyApple)

module.exports = router
