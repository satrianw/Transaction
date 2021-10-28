var dbConn = require('../config/db.config')
const bcrypt = require('bcryptjs')

var Users = function(users){
    this.name = users.name
    this.created_at = users.created_at
    this.updated_at = users.updated_at
}

// Register

Users.register = (payload, result) =>{
    payload.created_at = new Date();
    payload.updated_at = new Date();
    dbConn.query('SELECT name FROM users WHERE name = ?', [payload.name], async (error, res) => {
        if(error){
            console.log(error);
        }
        if(res.length > 0){
            result({ message: "Name Already Exist!"})
        }else{
        dbConn.query('INSERT INTO users SET ?', {name: payload.name, created_at: payload.created_at, updated_at: payload.updated_at}, (error, res) =>{
            if(error){
                console.log(error);
            }else{
                result({ message: "User Created" });
            }
        })
    }
    })
}

module.exports = Users;