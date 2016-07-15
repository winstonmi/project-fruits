const express = require('express')
const router = express.Router()
const Apple = require('../models/apple')
const Banana = require('../models/banana')

const applesController = require('../controller/apples_controller')
const bananasController = require('../controller/bananas_controller')

router.route('/apples')
  // '/apples' GET
  .get(applesController.getAll)
  .post(applesController.createApple)

// router.route('/apples/:id')
  // // '/apples/:id' GET
  // .get(applesController.getApple)
  // // '/apples/:id' PUT
  // .put(applesController.updateApple)
  // // '/apples/:id' DESTROY
  // .delete(applesController.destroyApple)

router.route('/bananas')
  // '/bananas' GET
  .get(bananasController.getAll)
  .post(bananasController.createBanana)

// router.route('/bananas/:id')
  // // '/bananas/:id' GET
  // .get(bananasController.getBanana)
  // // '/bananas/:id' PUT
  // .put(bananasController.updateBanana)
  // // '/bananas/:id' DESTROY
  // .delete(bananasController.destroyBanana)

module.exports = router
