var dbConn = require('../config/db.config')
const bcrypt = require('bcryptjs')

var Product = function(products){
    this.sku = products.sku
    this.name = products.name
    this.description = products.description
    this.image = products.image
    this.created_at = products.created_at
    this.updated_at = products.updated_at
    this.created_by = products.created_by
}

// Register

Product.create = (payload, result) =>{
    payload.created_at = new Date();
    payload.updated_at = new Date();
    dbConn.query('SELECT id FROM users WHERE id = ?', [payload.user_id], async (error, res) => {
        if(error){
            console.log(error);
        }
        if(res.length < 1){
            result({ message: "Admin Not Exist!"})
        }else{
        dbConn.query('INSERT INTO products SET ?', {sku: payload.sku, name: payload.name,  description: payload.description, image: payload.image, created_at: payload.created_at, updated_at: payload.updated_at, created_by: payload.user_id}, (error, res) =>{
            if(error){
                console.log(error);
            }else{
                payload.product_id = res.insertId
                dbConn.query('INSERT INTO product_price_logs SET ?', {product_id: payload.product_id, price: payload.price, created_at: payload.created_at, updated_at: payload.updated_at, created_by: payload.user_id}, (error, res) =>{
                    if(error){
                        console.log(error);
                    }else{
                        result({ message: "Product Created" });
                    }
                })
            }
        })
    }
    })
}

module.exports = Product;