var dbConn = require('../config/db.config')
const bcrypt = require('bcryptjs')

var Transaction = function(transaction){
    this.sub_total = transaction.sub_total
    this.discount = transaction.discount
    this.grand_total = transaction.grand_total
    this.customer_id = transaction.customer_id
    this.status = transaction.status
    this.created_at = transaction.created_at
    this.updated_at = transaction.updated_at
    this.created_by = transaction.created_by
}

Transaction.create = (payload, result) =>{
    payload.created_at = new Date();
    payload.updated_at = new Date();
    payload.sub_total = payload.price;
    payload.grand_total = payload.price - ((payload.discount / 100) * payload.price) ;
    dbConn.query('SELECT id FROM users WHERE id = ?', [payload.user_id], async (error, res) => {
        if(error){
            console.log(error);
        }
        if(res.length < 1){
            result({ message: "Admin Not Exist!"})
        }else{
            dbConn.query('INSERT INTO transactions SET ?', { sub_total: payload.sub_total, grand_total: payload.grand_total, customer_id: payload.customer_id, created_at: payload.created_at, updated_at: payload.updated_at, created_by: payload.user_id}, async (error, res) => {
                if(error){
                    console.log(error);
                }
                if(res.length > 0){
                    result({ message: "Code Already Exist!"})
                }else{
                    payload.transaction_id = res.insertId
                    dbConn.query('INSERT INTO transaction_items SET ?', {transaction_id: payload.transaction_id, product_id: payload.product_id, price: payload.price, created_at: payload.created_at, updated_at: payload.updated_at}, (error, res) =>{
                        if(error){
                            console.log(error);
                        }else{
                         }
                    })
                }
            })
        }
    })
}

Transaction.updateQueue = (result) =>{
    const updated_at = new Date();
    dbConn.query(`UPDATE transactions SET status = 1, updated_at = ? WHERE status = 0;`,[updated_at],  async (err, res) =>{
        if(err){
            result(null,err)
        }else{
            result({ message: "Queue Updated" });
        }
    })
}

Transaction.update = (payload, result) =>{
    payload.updated_at = new Date();
    payload.sub_total = payload.price;
    payload.grand_total = payload.price - ((payload.discount / 100) * payload.price)
    dbConn.query(`UPDATE transaction_items SET product_id = ?, price = ?, updated_at = ? WHERE transaction_id = ?`,[payload.product_id, payload.price, payload.updated_at, payload.id],  async (err, res) =>{
        if(err){
            console.log(err);
        }else{
            dbConn.query(`UPDATE transactions SET sub_total = ?, discount = ?, grand_total = ?, customer_id = ?, updated_at = ? WHERE id = ?`,[payload.sub_total, payload.discount, payload.grand_total, payload.customer_id, payload.updated_at, payload.id],  async (err, res) =>{
                if(err){
                    console.log(err);
                }else{
                    result({ message: "Transaction Updated" });
                }
            })
        }
    })
}

Transaction.delete = (payload, result) =>{
    dbConn.query(`DELETE FROM transaction_items WHERE transaction_id = ?`,[payload.id],  async (err, res) =>{
        if(err){
            console.log(err);
        }else{
            dbConn.query(`DELETE FROM transactions WHERE id = ?`,[payload.id],  async (err, res) =>{
                if(err){
                    console.log(err);
                }else{
                    result({ message: "Transaction Deleted" });
                }
            })
        }
    })
}


module.exports = Transaction;
