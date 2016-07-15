const express = require('express')
const router = express.Router()
<<<<<<< HEAD
=======

>>>>>>> ce887647390ce92a059d845802a7dbf1d42027a6
const bananasController = require('../controller/bananas_controller')
const applesController = require('../controller/apples_controller')
const cheesesController = require('../controller/cheeses_controller')
const orangesController = require('../controller/oranges_controller')
const pearsController = require('../controller/pears_controller')

<<<<<<< HEAD
=======
router.route('/apples')
  // '/apples' GET
  .get(applesController.getAll)
  .post(applesController.createApple)

router.route('/bananas')
  // '/bananas' GET
  .get(bananasController.getAll)
  .post(bananasController.createBanana)
>>>>>>> ce887647390ce92a059d845802a7dbf1d42027a6

router.route('/apples')
  // '/apples' GET
  .get(applesController.getAll)
  .post(applesController.createApple)
router.route('/bananas')
  // '/bananas' GET
  .get(bananasController.getAll)
  .post(bananasController.createBanana)
router.route('/cheeses')
  // '/cheeses' GET
  .get(cheesesController.getAll)
  .post(cheesesController.createCheese)
<<<<<<< HEAD
  router.route('/pears')
    // '/pears' GET
    .get(pearsController.getAll)
    .post(pearsController.createPear)
router.route('/oranges')
  // '/oranges' GET
  .get(orangesController.getAll)
  .post(orangesController.createOrange)
=======

router.route('/oranges')
  // '/apples' GET
  .get(orangesController.getAll)
  .post(orangesController.createOrange)

>>>>>>> ce887647390ce92a059d845802a7dbf1d42027a6
router.route('/oranges/:id')
  // 'oranges/:id' GET
  .get(orangesController.getOrange)
  // '/oranges/:id' PUT
  .put(orangesController.updateOrange)
  // '/oranges/:id' DELETE
  .delete(orangesController.destroyOrange)
<<<<<<< HEAD
=======

>>>>>>> ce887647390ce92a059d845802a7dbf1d42027a6
module.exports = router
