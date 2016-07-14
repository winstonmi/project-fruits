const express = require('express')
const router = express.Router()
const Apple = require('../models/apple')

const applesController = require('../controller/apples_controller')


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

module.exports = router
