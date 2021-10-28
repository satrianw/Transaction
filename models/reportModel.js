var dbConn = require('../config/db.config')
const bcrypt = require('bcryptjs')

var Customer = function(users){
    this.name = users.name
    this.created_at = users.created_at
    this.updated_at = users.updated_at
    this.created_by = users.created_by
}

Customer.customerDaily = (result) =>{
    dbConn.query(`SELECT COUNT(id) as total_id FROM customer WHERE created_at > DATE_SUB(NOW(), INTERVAL 1 DAY) ORDER BY id DESC;`,  async (err, res) =>{
        if(err){
            console.log('Error while fetching', err)
            result(null,err)
        }else{
            console.log('Fetched successfully');
            result(null,res);
        }
    })
}

Customer.customerWeekly = (result) =>{
    dbConn.query(`SELECT COUNT(id) as total_id FROM customer WHERE created_at > DATE_SUB(NOW(), INTERVAL 1 WEEK) ORDER BY id DESC;`,  async (err, res) =>{
        if(err){
            console.log('Error while fetching', err)
            result(null,err)
        }else{
            console.log('Fetched successfully');
            result(null,res);
        }
    })
}

Customer.customerMonthly = (result) =>{
    dbConn.query(`SELECT COUNT(id) as total_id FROM customer WHERE created_at > DATE_SUB(NOW(), INTERVAL 1 MONTH) ORDER BY id DESC;`,  async (err, res) =>{
        if(err){
            console.log('Error while fetching', err)
            result(null,err)
        }else{
            console.log('Fetched successfully');
            result(null,res);
        }
    })
}

Customer.purchaseDaily = (result) =>{
    dbConn.query(`SELECT Count(id) as count, SUM(grand_total) as total FROM product_purchase WHERE created_at > DATE_SUB(NOW(), INTERVAL 1 DAY) ORDER BY id DESC;`,  async (err, res) =>{
        if(err){
            console.log('Error while fetching', err)
            result(null,err)
        }else{
            console.log('Fetched successfully');
            result(null,res);
        }
    })
}

Customer.purchaseWeekly = (result) =>{
    dbConn.query(`SELECT Count(id) as count, SUM(grand_total) as total FROM product_purchase WHERE created_at > DATE_SUB(NOW(), INTERVAL 1 WEEK) ORDER BY id DESC;`,  async (err, res) =>{
        if(err){
            console.log('Error while fetching', err)
            result(null,err)
        }else{
            console.log('Fetched successfully');
            result(null,res);
        }
    })
}

Customer.purchaseMonthly = (result) =>{
    dbConn.query(`SELECT Count(id) as count, SUM(grand_total) as total FROM product_purchase WHERE created_at > DATE_SUB(NOW(), INTERVAL 1 MONTH) ORDER BY id DESC;`,  async (err, res) =>{
        if(err){
            console.log('Error while fetching', err)
            result(null,err)
        }else{
            console.log('Fetched successfully');
            result(null,res);
        }
    })
}

Customer.transactionDaily = (result) =>{
    dbConn.query(`SELECT Count(id) as count, SUM(grand_total) as total FROM transactions WHERE created_at > DATE_SUB(NOW(), INTERVAL 1 DAY) ORDER BY id DESC;`,  async (err, res) =>{
        if(err){
            console.log('Error while fetching', err)
            result(null,err)
        }else{
            console.log('Fetched successfully');
            result(null,res);
        }
    })
}

Customer.transactionWeekly = (result) =>{
    dbConn.query(`SELECT Count(id) as count, SUM(grand_total) as total FROM transactions WHERE created_at > DATE_SUB(NOW(), INTERVAL 1 WEEK) ORDER BY id DESC;`,  async (err, res) =>{
        if(err){
            console.log('Error while fetching', err)
            result(null,err)
        }else{
            console.log('Fetched successfully');
            result(null,res);
        }
    })
}

Customer.transactionMonthly = (result) =>{
    dbConn.query(`SELECT Count(id) as count, SUM(grand_total) as total FROM transactions WHERE created_at > DATE_SUB(NOW(), INTERVAL 1 MONTH) ORDER BY id DESC;`,  async (err, res) =>{
        if(err){
            console.log('Error while fetching', err)
            result(null,err)
        }else{
            console.log('Fetched successfully');
            result(null,res);
        }
    })
}
module.exports = Customer;