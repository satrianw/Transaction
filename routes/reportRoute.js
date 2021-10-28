const express = require('express')
const router = express.Router();
const reportController = require('../controllers/reportController')

// get day/week/month customer
router.post('/customer', reportController.totalCustomer)
// get day/week/month margin
router.post('/margin', reportController.totalPurchase)
// get day/week/month transaction
router.post('/transaction', reportController.totalTransaction)


module.exports = router;