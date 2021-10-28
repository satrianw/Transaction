const mysql = require('mysql');

// mysql connection
const dbConn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'transaction'
});

dbConn.connect(function(error){
    if(error) throw error;
    console.log('Database Connected');
})

module.exports = dbConn