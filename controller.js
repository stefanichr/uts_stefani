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

//input montir
exports.inputmontir= function(req,res){
    var nama_montir = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;

    connection.query('INSERT INTO T_montir(nama_montir,harga_perjam) VALUES(?,?)',[nama_montir,harga_perjam],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Menambahkan Data!",res)
        }
    });
};

//input sparerpart
exports.inputsparepart= function(req,res){
    var nama_sparepart = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan= req.body.satuan;

    connection.query('INSERT INTO T_sparepart(nama_sparepart,harga_sparepart,satuan) VALUES(?,?,?)',[nama_sparepart,harga_sparepart,satuan],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Menambahkan Data!",res)
        }
    });
};

//input user
exports.inputuser= function(req,res){
    var nama_user = req.body.nama_user;
    var email = req.body.email;
    var password= req.body.password;
    var level= req.body.level;

    connection.query('INSERT INTO T_user(nama_user,email,password,level) VALUES(?,?,?,?)',[nama_user,email,password,level],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Menambahkan Data!",res)
        }
    });
};

//input level
exports.inputlevel= function(req,res){
    var nama_level = req.body.nama_level;
   

    connection.query('INSERT INTO T_level(nama_level) VALUES(?)',[nama_level],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Menambahkan Data!",res)
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

//mengubah data berdasarkan id
exports.ubahT_montir = function(req,res){
    var id = req.body.id_montir;
    var nama = req.body.nama_montir;
    var harga_perjam = req.body.harga_perjam;
    
    connection.query('UPDATE T_montir SET nama_montir=?, harga_perjam=? WHERE id_montir=?', [nama,harga_perjam,id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Ubah Data!",res)
        }
    });
    };

    //mengubah data berdasarkan id
exports.ubahT_sparepart = function(req,res){
    var id = req.body.id_sparepart;
    var nama = req.body.nama_sparepart;
    var harga_sparepart = req.body.harga_sparepart;
    var satuan = req.body.satuan;
    
    connection.query('UPDATE T_sparepart SET nama_sparepart=?, harga_sparepart=?, satuan=? WHERE id_sparepart=?', [nama,harga_sparepart,satuan,id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Ubah Data!",res)
        }
    });
    };

       //mengubah data berdasarkan id
exports.ubahT_user = function(req,res){
    var id = req.body.id_user;
    var nama = req.body.nama_user;
    var email = req.body.email;
    var password = req.body.password;
    var level = req.body.level;
    connection.query('UPDATE T_user SET nama_user=?, email=?, password=?, level=? WHERE idT_user=?', [nama,email,password,level,id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Ubah Data!",res)
        }
    });
    };

         //mengubah data berdasarkan id
exports.ubahT_level = function(req,res){
    var id = req.body.id_level;
    var nama = req.body.nama_level;

    connection.query('UPDATE T_level SET nama_level=? WHERE id_level=?', [nama,id],
    function(error, rows, fields){
        if(error){
            console.log(error);
        }else{
            response.ok("Berhasil Ubah Data!",res)
        }
    });
    };

    //menghapus data berdasarkan id
    exports.hapusT_montir = function(req,res){
    var id = req.body.id_montir;
    connection.query('DELETE FROM T_montir WHERE id_montir=?',[id],
    function(error, rows, fields){
    if(error){
    console.log(error);
    }else{
    response.ok("Berhasil hapus Data!",res)
    }
    });
    }; 