const express = require('express')
const transactionModel = require('../models/transactionModel')

// update queue transaction
exports.updateQueueTransaction = (req, res)=>{
    const user = transactionModel.updateQueue((err, result) =>{
        if(err){
        res.send(err)
        }else{
        res.send(result)
        }
    })
}

exports.updateTransaction = (req, res)=>{
    const payload = req.body
    const user = transactionModel.update(payload, (err, result) =>{
        if(err){
        res.send(err)
        }else{
        res.send(result)
        }
    })
}

exports.deleteTransaction = (req, res)=>{
    const payload = req.body
    const user = transactionModel.delete(payload, (err, result) =>{
        if(err){
        res.send(err)
        }else{
        res.send(result)
        }
    })
}