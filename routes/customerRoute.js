const express = require('express')
const router = express.Router();
const customerController = require('../controllers/customerController')

// get all customer
router.get('/list', customerController.listCustomer)

// create new customer
router.post('/create', customerController.createCustomer)



module.exports = router;