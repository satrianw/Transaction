var dbConn = require('../config/db.config')
const bcrypt = require('bcryptjs')

var Customer = function(users){
    this.name = users.name
    this.created_at = users.created_at
    this.updated_at = users.updated_at
    this.created_by = users.created_by
}

// Register

Customer.register = (payload, result) =>{
    payload.created_at = new Date();
    payload.updated_at = new Date();
    dbConn.query('SELECT id FROM users WHERE id = ?', [payload.user_id], async (error, res) => {
        if(error){
            console.log(error);
        }
        if(res.length < 1){
            result({ message: "Admin Not Exist!"})
        }else{
        dbConn.query('INSERT INTO customer SET ?', {name: payload.name, created_at: payload.created_at, updated_at: payload.updated_at, created_by: payload.user_id}, (error, res) =>{
            if(error){
                console.log(error);
            }else{
                result({ message: "Customer Created" });
            }
        })
    }
    })
}

Customer.list = (result) =>{
    dbConn.query(`SELECT * FROM customer`,  async (err, res) =>{
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