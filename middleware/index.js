var express = require('express');
var auth = require('./auth');
var router = express.Router();
var verifikasi = require('./verifikasi');
var verifikasiAdmin = require('./verifikasiAdmin');
var jsonku = require('../controller');

//daftarkan menu register
router.post('/api/v1/register',auth.registrasi);
router.post('/api/v1/login',auth.login);

//alamat yang perlu otorisasi
router.get('/api/v1/rahasia', verifikasi(2), auth.halamanrahasia);
router.post('/api/v1/input-servis', verifikasi(2), jsonku.inputservis);
router.get('/api/v1/showjoindata', verifikasi(2), jsonku.showjoindata);

router.post('/api/v1/input-montir', verifikasiAdmin(1), jsonku.inputmontir);
router.post('/api/v1/input-sparepart', verifikasiAdmin(1), jsonku.inputsparepart);
router.post('/api/v1/input-user', verifikasiAdmin(1), jsonku.inputuser);
router.post('/api/v1/input-level', verifikasiAdmin(1), jsonku.inputlevel);
router.post('/api/v1/input-servis', verifikasiAdmin(1), jsonku.inputservis);

router.put('/api/v1/ubah-montir', verifikasiAdmin(1), jsonku.ubahT_montir);
router.put('/api/v1/ubah-sparepart', verifikasiAdmin(1), jsonku.ubahT_sparepart);
router.put('/api/v1/ubah-user', verifikasiAdmin(1), jsonku.ubahT_user);
router.put('/api/v1/ubah-level', verifikasiAdmin(1), jsonku.ubahT_level);

module.exports = router;