'use strict';

var response = require('./res');
var connection = require('./koneksi');

exports.index = function(reqc,res){
    response.ok("Aplikasi REST API ku berjalan!",res)
};

//menampilkan semua data sparepart
exports.showsparepart= function(req,res){
    connection.query('SELECT * FROM T_sparepart', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};

//menampilkan semua data montir
exports.showmontir= function(req,res){
    connection.query('SELECT * FROM T_montir', function(error, rows, fileds){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};