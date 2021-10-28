const express = require('express')
const productPurchaseModel = require('../models/productPurchaseModel')

// create new customer
exports.createPurchase = (req, res)=>{
    const payload = req.body
    const user = productPurchaseModel.create(payload, (err, result) =>{
        if(err){
        res.send(err)
        }else{
        res.send(result)
        }
    })
}

exports.listPurchase = (req, res)=>{
    const user = productPurchaseModel.list((err, result) =>{
        if(err){
        res.send(err)
        }else{
        res.send(result)
        }
    })
}

exports.listProduct = (req, res)=>{
    const user = productPurchaseModel.product((err, result) =>{
        if(err){
        res.send(err)
        }else{
            const data = []
            result.forEach(e => {
                dataProduct = {}
                dataProduct.id = e.id
                dataProduct.product_purchase_id = e.product_purchase_id
                dataProduct.product_id = e.product_id
                dataProduct.qty = e.qty
                dataProduct.purchase_price = e.purchase_price
                dataProduct.total_price = e.qty * dataProduct.purchase_price
                
                data.push(dataProduct)
            });
        res.send(data)
        }
    })
}