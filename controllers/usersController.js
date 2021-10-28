const express = require('express')
const usersModel = require('../models/usersModel')

// create new users
exports.createUsers = (req, res)=>{
    const payload = req.body
    const user = usersModel.register(payload, (err, result) =>{
        if(err){
        res.send(err)
        }else{
        res.send(result)
        }
    })
}
