var mysql = require('mysql');

//nuat koneksi database
const conn =  mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'password',
    database:'uts_stefani' 
});

conn.connect((err)=>{
    if(err) throw err;
    console.log('Mysql terkoneksi');
});


module.exports = conn;