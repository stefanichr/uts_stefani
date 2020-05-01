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

//input servis
exports.inputservis= function(req,res){
    var tgl_servis = req.body.tgl_servis;
    var id_user = req.body.id_user;
    var id_montir = req.body.id_montir;
    var jumlah_sparepart = req.body.jumlah_sparepart;
    var id_sparepart = req.body.id_sparepart;

    connection.query('INSERT INTO T_servis(tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart) VALUES(?,?,?,?,?)',[tgl_servis,id_user,id_montir,jumlah_sparepart,id_sparepart],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Menambahkan Data!",res)
        }
    });
};

//menampilkan data join
exports.showjoindata= function(req,res){
    connection.query('SELECT T_user.nama_user,T_servis.tgl_servis,T_montir.nama_montir,T_sparepart.nama_sparepart,T_servis.jumlah_sparepart,T_sparepart.harga_sparepart,T_montir.harga_perjam + (T_servis.jumlah_sparepart * T_sparepart.harga_sparepart) as total_bayar FROM T_servis JOIN T_montir ON T_servis.id_montir = T_montir.id_montir JOIN T_sparepart ON T_servis.id_sparepart = T_sparepart.id_sparepart JOIN T_user ON T_servis.id_user = T_user.id_user', function(error, rows, fields){
        if(error){
            connection.log(error);
        }else{
            response.ok(rows, res)
        }
    });
};