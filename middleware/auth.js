var connection = require('../koneksi');
var mysql = require('mysql');
var md5 = require('MD5');
var response = require('../res');
var jwt = require('jsonwebtoken');
var config = require('../config/secret');
var ip =require('ip');

//controller untuk register
exports.registrasi = function(req,res){
    var post = {
        nama_user: req.body.nama_user,
        email: req.body.email,
        password: md5(req.body.password),
        level: req.body.level,
    }

    var query ="SELECT email FROM ?? WHERE ??=?";
    var table = ["T_user","email",post.email];

    query = mysql.format(query,table);

    connection.query(query, function(error,rows){
        if(error){
            console.log(error);
        }else {
            if(rows.length == 0){
                var query ="INSERT INTO ?? SET ?";
                var table = ["T_user"];
                query = mysql.format (query,table);
                connection.query(query, post, function(error,rows){
                    if(error){
                        console.log(error);
                    }else{
                        response.ok("berhasil menambahkan data user baru", res);
                    }
                });
            }else{
                response.ok("Email sudah terdaftar",res);
            }
        }
    })
}