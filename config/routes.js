const express = require('express')
const router = express.Router()
const Apple = require('../models/apple')

//PEAR (LM)
const Pear = require('../models/pear')

const applesController = require('../controller/apples_controller')

//PEAR (LM)
const pearsController = require('../controller/pears_controller')


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

//PEAR (LM)
router.route('/pears')
// '/apples' GET
.get(pearsController.getAll)
.post(pearsController.createPear)


module.exports = router
