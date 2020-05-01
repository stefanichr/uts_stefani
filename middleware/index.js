var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');
var jsonku = require('../controller');

//daftarkan menu register
router.post('/api/v1/register',auth.registrasi);
router.post('/api/v1/login',auth.login);

//alamat yang perlu otorisasi
router.get('/api/v1/rahasia', verifikasi(2), auth.halamanrahasia);
router.post('/api/v1/input-servis', verifikasi(2), jsonku.inputservis);
router.get('/api/v1/showjoindata', verifikasi(2), jsonku.showjoindata);


module.exports = router;