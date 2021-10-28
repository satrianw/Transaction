var dbConn = require('../config/db.config')
const bcrypt = require('bcryptjs')

var Purchase = function(purchase){
    this.code = purchase.code
    this.sub_total = purchase.sub_total
    this.grand_total = purchase.grand_total
    this.created_at = purchase.created_at
    this.updated_at = purchase.updated_at
    this.created_by = purchase.created_by
}

// Register

Purchase.create = (payload, result) =>{
    payload.created_at = new Date();
    payload.updated_at = new Date();
    payload.sub_total = payload.qty * payload.purchase_price;
    payload.grand_total = payload.sub_total;
    dbConn.query('SELECT id FROM users WHERE id = ?', [payload.user_id], async (error, res) => {
        if(error){
            console.log(error);
        }
        if(res.length < 1){
            result({ message: "Admin Not Exist!"})
        }else{
            dbConn.query('SELECT code FROM product_purchase WHERE code = ?', [payload.code], async (error, res) => {
                if(error){
                    console.log(error);
                }
                if(res.length > 0){
                    result({ message: "Code Already Exist!"})
                }else{
                    dbConn.query('INSERT INTO product_purchase SET ?', {code: payload.code, sub_total: payload.sub_total, grand_total: payload.grand_total,created_at: payload.created_at, updated_at: payload.updated_at, created_by: payload.user_id}, (error, res) =>{
                        if(error){
                            console.log(error);
                        }else{
                            payload.product_purchase_id = res.insertId
                            dbConn.query('INSERT INTO product_purchase_items SET ?', {product_purchase_id: payload.product_purchase_id, product_id: payload.product_id, qty: payload.qty, purchase_price: payload.purchase_price}, (error, res) =>{
                                if(error){
                                    console.log(error);
                                }else{
                                    result({ message: "Product Purchase Created" });
                                }
                            })
                         }
                    })
                }
            })
        }
    })
}

Purchase.list = (result) =>{
    dbConn.query(`SELECT * FROM product_purchase`,  async (err, res) =>{
        if(err){
            console.log('Error while fetching', err)
            result(null,err)
        }else{
            console.log('Fetched successfully');
            result(null,res);
        }
    })
}

Purchase.product = (result) =>{
    dbConn.query(`SELECT * FROM product_purchase_items`,  async (err, res) =>{
        if(err){
            console.log('Error while fetching', err)
            result(null,err)
        }else{
            console.log('Fetched successfully');
            result(null,res);
        }
    })
}
module.exports = Purchase;