const express = require('express')
const router = express.Router();
const userController = require('../controllers/usersController')

// get all user

// create new users
router.post('/create', userController.createUsers)


module.exports = router;