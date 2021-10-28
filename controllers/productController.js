const express = require('express')
const productModel = require('../models/productModel')

// create new product
exports.createProduct = (req, res)=>{
    const payload = req.body
    payload.image = req.file.filename
    const user = productModel.create(payload, (err, result) =>{
        if(err){
        res.send(err)
        }else{
        res.send(result)
        }
    })
}
