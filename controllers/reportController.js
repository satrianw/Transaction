const express = require('express')
const reportModel = require('../models/reportModel')


exports.totalCustomer = (req, res)=>{
    const data = req.body.interval
    if(data == 1){
        const user = reportModel.customerDaily((err, result) =>{
            if(err){
            res.send(err)
            }else{
            res.send(result)
            }
        })
    }
    if(data == 7){
        const user = reportModel.customerWeekly((err, result) =>{
            if(err){
            res.send(err)
            }else{
            res.send(result)
            }
        })
    }
    if(data == 30){
        const user = reportModel.customerMonthly((err, result) =>{
            if(err){
            res.send(err)
            }else{
            res.send(result)
            }
        })
    }
}

exports.totalPurchase = (req, res)=>{
    const data = req.body.interval
    if(data == 1){
        const user = reportModel.purchaseDaily((err, result) =>{
            if(err){
            res.send(err)
            }else{
            res.send(result)
            }
        })
    }
    if(data == 7){
        const user = reportModel.purchaseWeekly((err, result) =>{
            if(err){
            res.send(err)
            }else{
            res.send(result)
            }
        })
    }
    if(data == 30){
        const user = reportModel.purchaseMonthly((err, result) =>{
            if(err){
            res.send(err)
            }else{
            res.send(result)
            }
        })
    }
}

exports.totalTransaction = (req, res)=>{
    const data = req.body.interval
    if(data == 1){
        const user = reportModel.transactionDaily((err, result) =>{
            if(err){
            res.send(err)
            }else{
            res.send(result)
            }
        })
    }
    if(data == 7){
        const user = reportModel.transactionWeekly((err, result) =>{
            if(err){
            res.send(err)
            }else{
            res.send(result)
            }
        })
    }
    if(data == 30){
        const user = reportModel.transactionMonthly((err, result) =>{
            if(err){
            res.send(err)
            }else{
            res.send(result)
            }
        })
    }
}
