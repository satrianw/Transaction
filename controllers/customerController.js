const express = require('express')
const customerModel = require('../models/customerModel')

// create new customer
exports.createCustomer = (req, res)=>{
    const payload = req.body
    const user = customerModel.register(payload, (err, result) =>{
        if(err){
        res.send(err)
        }else{
        res.send(result)
        }
    })
}

exports.listCustomer = (req, res)=>{
    const user = customerModel.list((err, result) =>{
        if(err){
        res.send(err)
        }else{
        res.send(result)
        }
    })
}
