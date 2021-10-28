const express = require('express')
const router = express.Router();
const productPurchaseController = require('../controllers/productPurchaseController')

// get list product purchase
router.get('/list', productPurchaseController.listPurchase)
router.get('/product', productPurchaseController.listProduct)

// create new product purchase
router.post('/create', productPurchaseController.createPurchase)



module.exports = router;