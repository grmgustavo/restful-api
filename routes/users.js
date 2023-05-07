var express = require('express');
var router = express.Router();

const usersController = require('../controllers/usersController')

/* GET users listing. */
router.post('/', usersController.create)
    .get('/', usersController.findAll)
    .get('/:id', usersController.findById)
    .patch('/:id', usersController.update)
    .delete('/:id', usersController.remove)



module.exports = router;
